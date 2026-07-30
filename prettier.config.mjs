/** @type {import("prettier").Config} */
export default {
	trailingComma: 'none',
	tabWidth: 4,
	useTabs: true,
	semi: false,
	printWidth: 120,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@/api/(.*)$',
		'^@/app/(.*)$',
		'^@/components/(.*)$',
		'^@/config/(.*)$',
		'^@/constants/(.*)$',
		'^@/hooks/(.*)$',
		'^@/services/(.*)$',
		'^@/shared/(.*)$',
		'^@/store/(.*)$',
		'^@/utils/(.*)$',
		'^../(.*)$',
		'^./(.*)$',
		'(.scss)$'
	],
	tailwindStylesheet: 'src/app/globals.css',
	tailwindFunctions: ['cn', 'cva'],
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
}
