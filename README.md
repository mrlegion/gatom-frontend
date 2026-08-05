# GATOM Frontend

Frontend application for GATOM management system built with Next.js 14 and shadcn/ui components.

## Project Overview

This is a Next.js 14 frontend application implementing an administrative interface for managing users, positions, organizations, and subsidiaries. The project follows modern React patterns with TypeScript type safety and includes authentication, data fetching, and responsive UI components.

## Key Features

- **Admin Dashboard**: Complete administrative interface
- **User Management**: Full CRUD operations for users
- **Position Management**: CRUD operations with data tables
- **Organization Management**: Hierarchical organization structure
- **Subsidiary Management**: Related entities management
- **Authentication System**: Secure login and token management
- **Responsive UI**: Mobile-friendly interface using shadcn/ui components

## Technology Stack

- **Next.js 14** with App Router
- **shadcn/ui** component library for UI elements
- **TypeScript** for type safety
- **React Query** for state management and API data fetching
- **Tailwind CSS** for styling
- **Axios** for HTTP requests with authentication

## Project Structure

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

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
SERVER_URL=http://localhost:8080
APP_DOMAIN=localhost
```

## Documentation

- **[Project Structure](PROJECT_STRUCTURE.md)**: Detailed overview of project structure and components
- **[Agents Documentation](agents.md)**: Technical documentation about the project architecture
- **[Claude Project Docs](claude.md)**: Claude-specific project documentation

## Key Components

### Authentication
- JWT-based authentication with refresh tokens
- Protected routes using Next.js middleware
- Token storage in cookies
- Automatic token refresh on 401 errors

### Data Management
- Data tables with sorting and filtering capabilities
- Form handling for CRUD operations
- Type-safe API interactions using React Query

### UI Components
- Responsive sidebar navigation
- Breadcrumb navigation system
- Data tables with selection capabilities
- Authentication forms (login, register)

## Services

### Position Service (`src/services/positions/position.service.ts`)
- Provides CRUD operations for position entities
- Uses axiosWithAuth for authenticated requests
- Follows REST API patterns

### Authentication Service (`src/services/auth/`)
- Handles login, registration, refresh, logout
- Manages JWT tokens in cookies
- Implements automatic token refresh

## API Integration

### HTTP Client Configuration (`src/api/interceptors.api.ts`)
- Axios instance with authentication interceptor
- Automatic token refresh on 401 errors
- Error handling and retry logic
- Request/response interceptors

## Development Tools

- TypeScript for type safety
- React Query for state management
- Next.js App Router for routing
- ESLint and Prettier for code quality

## Security

- All API requests use authenticated axios client
- Automatic token refresh on 401 errors
- Protected routes using Next.js middleware
- JWT-based authentication with secure cookies