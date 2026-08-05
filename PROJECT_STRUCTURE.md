# GATOM Frontend Project Structure

## Overview
This document describes the project structure and key components of the GATOM frontend application, which is built with Next.js 14 and shadcn/ui components.

## Directory Structure

```
src/
├── app/                           # Next.js App Router pages and routes
│   ├── admin/                     # Admin dashboard routes
│   │   ├── layout.tsx             # Admin layout
│   │   ├── page.tsx               # Admin dashboard main page
│   │   ├── users/                 # User management routes
│   │   │   ├── [id]/              # User detail routes
│   │   │   │   ├── edit/          # Edit user route
│   │   │   │   └── page.tsx       # View user route
│   │   │   ├── create/            # Create new user route
│   │   │   ├── columns.tsx        # User table columns definition
│   │   │   └── page.tsx           # Users list page
│   │   └── positions/             # Position management routes
│   │       ├── [id]/              # Position detail routes
│   │       │   ├── edit/          # Edit position route
│   │       │   └── page.tsx       # View position route
│   │       ├── create/            # Create new position route
│   │       ├── columns.tsx        # Position table columns definition
│   │       └── page.tsx           # Positions list page
│   ├── auth/                      # Authentication routes
│   │   ├── layout.tsx             # Auth layout
│   │   └── login/                 # Login route
│   │       └── page.tsx           # Login page
│   ├── globals.css                # Global styles
│   └── layout.tsx                 # Main application layout
├── components/                    # Reusable UI components
│   ├── auth/                      # Authentication components
│   │   ├── AuthPage.tsx           # Authentication page wrapper
│   │   ├── AuthLogo.tsx           # Authentication logo component
│   │   ├── AuthPageImage.tsx      # Authentication background image
│   │   └── login/                 # Login form components
│   │       ├── LoginForm.tsx      # Login form component
│   │       └── index.ts           # Export all login components
│   ├── breadcrumb/                # Breadcrumb navigation components
│   │   ├── BreadcrumbLabel.tsx    # Breadcrumb label component
│   │   └── SidebarBreadcrumb.tsx  # Sidebar breadcrumb component
│   ├── layout/                    # Layout components
│   │   └── admin/                 # Admin layout components
│   │       ├── sidebar/           # Sidebar components
│   │       │   ├── AdminSidebar.tsx
│   │       │   ├── AdminSidebarHeader.tsx
│   │       │   └── AdminSidebarContent.tsx
│   │       └── index.ts
│   ├── pages/                     # Page-level components
│   │   ├── users/                 # User management page components
│   │   │   ├── columns.tsx        # User table columns definition
│   │   │   └── UserPage.tsx       # User management page
│   │   └── positions/             # Position management page components
│   │       ├── columns.tsx        # Position table columns definition
│   │       └── PositionPage.tsx   # Position management page
│   ├── ui/                        # shadcn/ui components re-exports
│   │   ├── button.tsx
│   │   ├── checkbox.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── table.tsx
│   │   ├── tooltip.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── card.tsx
│   │   ├── field.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   └── badge.tsx
│   └── data-table/                # Data table components
│       ├── DataTable.tsx          # Generic data table component
│       └── index.ts
├── hooks/                         # Custom React hooks
│   ├── auth/                      # Authentication hooks
│   │   └── useLogin.ts            # Login form hook
│   └── positions/                 # Position-related hooks
│       └── usePositionsList.ts    # Hook for fetching positions list
├── services/                      # Business logic and API service classes
│   ├── auth/                      # Authentication services
│   │   ├── auth-token.ts          # Token management (cookies)
│   │   ├── auth.service.ts        # Authentication methods
│   │   └── index.ts
│   └── positions/                 # Position services
│       ├── position.service.ts    # Position CRUD operations
│       └── index.ts
├── api/                           # HTTP client configuration and helpers
│   ├── interceptors.api.ts        # Axios interceptors for auth and error handling
│   ├── helpers.api.ts             # API helper functions
│   └── index.ts                   # Exports interceptors and helpers
├── config/                        # Configuration files
│   ├── api.config.ts              # API URL and endpoint definitions
│   ├── url.config.ts              # URL configuration
│   └── path-labels.config.ts      # Path labels for navigation
├── types/                         # TypeScript type definitions
│   ├── user/                      # User-related types
│   │   ├── user.types.ts
│   │   └── index.ts
│   ├── auth/                      # Authentication-related types
│   │   ├── auth.types.ts
│   │   └── index.ts
│   └── positions/                 # Position-related types
│       ├── position.types.ts
│       └── index.ts
├── contexts/                      # React context providers
│   └── breadcrumb.context.ts      # Breadcrumb context
├── providers/                     # Context providers
│   ├── QCProvider.tsx             # React Query provider
│   └── BOProvider.tsx             # Business object provider
├── utils/                         # Utility functions
│   ├── index.ts
│   └── clsx.ts                    # clsx utility function
└── example/                       # Example data files
    ├── users.example.ts           # Example user data
    └── index.ts
```

## Key Components

### Authentication System
- **AuthPage.tsx**: Wrapper component for authentication pages
- **LoginForm.tsx**: Login form with validation
- **authToken.ts**: Token management using js-cookie
- **auth.service.ts**: Authentication methods (login, logout, refresh)
- **useLogin.ts**: Custom hook for login form handling

### Data Management
- **DataTable.tsx**: Generic data table component with sorting and filtering
- **usePositionsList.ts**: Hook for fetching positions list with React Query
- **position.service.ts**: Service class for position CRUD operations

### Navigation
- **AdminSidebar.tsx**: Main admin sidebar navigation
- **SidebarBreadcrumb.tsx**: Breadcrumb navigation in sidebar
- **BreadcrumbLabel.tsx**: Individual breadcrumb label component

### Position Management
- **PositionPage.tsx**: Main page for position management
- **columns.tsx**: Column definitions for position data table
- **position.service.ts**: Service for position CRUD operations

### User Management
- **UserPage.tsx**: Main page for user management
- **columns.tsx**: Column definitions for user data table

## Technology Stack

### Core Technologies
- **Next.js 14** with App Router
- **shadcn/ui** component library
- **TypeScript** for type safety
- **React Query** (TanStack) for state management
- **Tailwind CSS** for styling
- **Axios** for HTTP requests

### Data Flow Architecture
```
Component → Hook → Service → API Client → Server
    ↑       ↑      ↑         ↑           ↓
    └───────┼──────┼─────────┼───────────┘
            │      │         │
        React Query  │     Authenticated axios client
                     │
               TypeScript interfaces and types
```

## API Integration

### HTTP Client Configuration
- **interceptors.api.ts**: Axios interceptors with authentication handling
- **axiosWithAuth**: Authenticated axios instance
- **Error handling**: Automatic token refresh on 401 errors

### API Endpoints
- Authentication endpoints: login, register, refresh, logout
- Position endpoints: get all, create, update, delete
- Organization endpoints: get all, create, update, delete
- Subsidiary endpoints: get all, create, update, delete

## Development Guidelines

### Component Structure
1. All components follow a consistent naming convention
2. UI components are imported from `components/ui/`
3. Page-level components are in `components/pages/`
4. Custom hooks are in `hooks/` directory

### Type Safety
- TypeScript interfaces with clear naming (prefixed with `I`)
- Type aliases with clear naming (prefixed with `T`)
- Strict typing for API responses and form data

### Performance
- React Query caching for API data
- Component-level memoization where appropriate
- Efficient data fetching patterns