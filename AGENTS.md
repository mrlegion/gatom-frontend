# GATOM Frontend Project

## Overview

This is a Next.js 16 frontend application built with shadcn/ui components, implementing an administrative interface for managing users, positions, organizations, and subsidiaries. The project follows modern React patterns with TypeScript type safety and includes authentication, data fetching, and responsive UI components.

## Architecture

### Core Components
- **Next.js 16** with App Router
- **shadcn/ui** component library for UI elements
- **TypeScript** for type safety
- **React Query** for state management and API data fetching
- **Tailwind CSS** for styling
- **Axios** for HTTP requests with authentication

### Folder Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── services/               # Business logic and API service classes
├── api/                    # HTTP client configuration
├── config/                 # Configuration files
├── types/                  # TypeScript type definitions
├── providers/              # Context providers
└── utils/                  # Utility functions
```

### Authentication Flow
- JWT-based authentication with refresh tokens
- Protected routes using Next.js middleware
- Token storage in cookies
- Automatic token refresh on 401 errors

## Key Features

### Admin Dashboard
- User management (CRUD operations)
- Position management (CRUD operations)  
- Organization management (CRUD operations)
- Subsidiary management (CRUD operations)

### Data Management
- Data tables with sorting and filtering
- Form handling for CRUD operations
- Type-safe API interactions

### UI Components
- Responsive sidebar navigation
- Breadcrumb navigation system
- Data tables with selection capabilities
- Authentication forms (login, register)

## Services

### Authentication Service (`src/services/auth/`)
- Handles login, registration, refresh, logout
- Manages JWT tokens in cookies
- Implements automatic token refresh

### Position Service (`src/services/positions/`)
- Provides CRUD operations for position entities
- Uses axiosWithAuth for authenticated requests
- Follows REST API patterns

## API Integration

### HTTP Client Configuration (`src/api/interceptors.api.ts`)
- Axios instance with authentication interceptor
- Automatic token refresh on 401 errors
- Error handling and retry logic
- Request/response interceptors

### API Endpoints (`src/config/api.config.ts`)
- Auth endpoints: login, register, refresh, logout
- Position endpoints: get all, create, update, delete
- Organization endpoints: get all, create, update, delete
- Subsidiary endpoints: get all, create, update, delete

## Key Hooks

### usePositionsList (`src/hooks/positions/usePositionsList.ts`)
- Fetches all positions from API using React Query
- Handles loading and error states
- Provides data for position tables with 2-minute cache time

### Authentication Hooks
- `useLogin` - handles login form submission
- Custom hooks for auth state management

## Types

### Position Types (`src/types/positions/position.types.ts`)
```typescript
interface IPosition {
  id: string;
  title: string;
  isNonActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IPositionCreate {
  title: string;
}

interface IPositonResponse {
  success: boolean;
  position: IPosition;
}

type TPositionUpdate = Pick<IPosition, 'title' | 'isNonActive'>
```

### User Types (`src/types/user/user.types.ts`)
```typescript
interface IUser {
  id: string;
  email: string;
  username: string;
  passwordChangeAt: string;
  inactive: boolean;
  initial: boolean;
  usedTwoFactor: boolean;
}

interface IUserTable extends IUser {
  // Table-specific properties
}
```

## Data Flow

1. **Component** → **Hook** (e.g., `usePositionsList`)
2. **Hook** → **Service** (e.g., `positionService.getAll()`)
3. **Service** → **API Client** (`axiosWithAuth`)
4. **API Client** → **Server**
5. **Server Response** → **Component**

## Security

- All API requests use authenticated axios client
- Automatic token refresh on 401 errors
- Protected routes using Next.js middleware
- JWT-based authentication with secure cookies

## Styling

- Tailwind CSS for styling
- shadcn/ui components for consistent UI
- Responsive design patterns
- Component-level styling with Tailwind classes

## Development Tools

- TypeScript for type safety
- React Query for state management
- Next.js App Router for routing
- ESLint and Prettier for code quality

## Position Management Implementation Details

### Service Layer (`src/services/positions/position.service.ts`)
- Implements getAll() method for fetching all positions
- Implements findById() for single position retrieval
- Implements create(), update(), delete() methods
- Uses axiosWithAuth for authenticated requests

### Hook Layer (`src/hooks/positions/usePositionsList.ts`)
- Implements React Query with queryKey: ['positions list']
- Uses staleTime of 2 minutes for caching
- Provides positions data, loading and error states

### UI Components (`src/components/pages/positions/`)
- PositionPage.tsx - Main position management page
- columns.tsx - Table column definitions using react-table
- Data table with selection capabilities and links to detail pages

### Column Definitions (`src/components/pages/positions/columns.tsx`)
- Select column for row selection
- ID column
- Title column with link to detail view
- Deactivated status with badge indicators
- Creation and update timestamps