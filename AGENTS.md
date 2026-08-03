<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Description

## Overview
This is a Next.js frontend template project using shadcn/ui component library. The application appears to be a web-based management system with authentication capabilities and API integration.

## Key Features and Structure

### Technology Stack
- **Framework**: Next.js 16.2.6 (React 19.2.4)
- **UI Library**: shadcn/ui components
- **State Management**: React Query (TanStack)
- **Styling**: Tailwind CSS with tw-animate-css
- **Authentication**: JWT-based authentication with token management
- **HTTP Client**: Axios

### Project Structure
```
src/
├── api/                 # API client configuration and helpers
│   ├── index.ts         # Exports interceptors and helpers
│   ├── interceptors.api.ts  # Axios interceptors for auth and error handling
│   └── helpers.api.ts   # API helper functions
├── config/              # Configuration files
│   ├── api.config.ts    # API URL and endpoint definitions
│   └── url.config.ts    # URL configuration
├── services/            # Service layer for business logic
│   └── auth/            # Authentication services
│       ├── auth-token.ts    # Token management (cookies)
│       ├── auth.service.ts  # Authentication methods
│       └── index.ts
├── types/               # TypeScript type definitions
│   ├── user/            # User-related types
│   │   ├── user.types.ts
│   │   └── index.ts
│   └── auth/            # Authentication-related types
│       ├── auth.types.ts
│       └── index.ts
├── components/          # UI Components (shadcn/ui)
│   └── ui/              # Re-exported shadcn components
└── hooks/               # Custom React hooks
```

### Core Functionality

#### Authentication System
- **Token Management**: Uses js-cookie for storing access tokens with domain-specific settings
- **API Interceptors**: 
  - Automatically attaches JWT tokens to authenticated requests
  - Handles token refresh logic (incomplete in current implementation)
  - Manages unauthorized responses (401 status or specific error messages)
- **Endpoints**:
  - Login, register, refresh, logout, update-password
  - Organization management (CRUD operations)
  - Position management (CRUD operations)
  - Subsidiary management (CRUD with connection operations)

#### API Configuration
The `api.config.ts` file defines a comprehensive URL structure with:
- Authentication endpoints
- Organization management endpoints
- Position management endpoints  
- Subsidiary management endpoints

#### Type Definitions
The project uses a consistent naming convention for TypeScript types:
- **Interfaces**: Prefixed with `I` (e.g., `ILoginForm`, `IResponse`, `IUser`)
- **Types**: Prefixed with `T` (e.g., `TRefreshResponse`, `TChangePasswordForm`)

#### Components
Uses shadcn/ui component library for UI elements, including:
- Button
- Input
- Checkbox
- Dropdown menu
- Table
- Tooltip
- Breadcrumb
- Sidebar
- Sheet
- Skeleton

### Key Files Summary

1. **Authentication Service** (`auth.service.ts`): Contains authentication logic but appears to be partially implemented
2. **Token Management** (`auth-token.ts`): Handles cookie-based token storage and retrieval
3. **API Interceptors** (`interceptors.api.ts`): Manages authenticated requests and error handling including unauthorized access scenarios
4. **Type Definitions**: Consistent pattern of interfaces for object contracts and types for complex aliases

This project appears to be a foundation for a business management application with user authentication, organization management, and API integration capabilities using modern Next.js patterns and shadcn/ui components.
