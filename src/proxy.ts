import { type NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from '@/services/auth'

import { PUBLIC_URI } from '@/config'

export async function proxy(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
	if (isAuthPage) {
		if (refreshToken) {
			return NextResponse.redirect(new URL(PUBLIC_URI.admin.home(), request.url))
		}
		return NextResponse.next()
	}

	const protectedRoutes = ['/admin']
	const isProtectedRoute = protectedRoutes.some(r => request.nextUrl.pathname.startsWith(r))

	if (isProtectedRoute && !refreshToken) {
		const loginUrl = new URL(PUBLIC_URI.auth.login(), request.url)
		loginUrl.searchParams.set('redirectFrom', request.nextUrl.pathname)
		return NextResponse.redirect(loginUrl)
	}

	return NextResponse.next()
}
