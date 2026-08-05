# Claude Project Documentation

## Project Overview

This is a Next.js 16 frontend application built with shadcn/ui components for an administrative interface. The project implements user, position, organization, and subsidiary management functionality with authentication capabilities.

## Key Technical Details

### Architecture Pattern
- Next.js App Router with TypeScript
- Component-based architecture using shadcn/ui
- Service layer pattern for API interactions
- Custom hooks for data fetching and business logic
- Context providers for global state management

### Authentication System
- JWT-based authentication with refresh tokens
- Protected routes via Next.js middleware
- Token storage in secure cookies
- Automatic token refresh on 401 errors
- Axios interceptors for authenticated requests

### Data Management
- React Query for API data fetching and caching
- Type-safe API interactions using TypeScript interfaces
- Component-based data tables with selection capabilities
- CRUD operations for all entity types (users, positions, organizations, subsidiaries)

## File Structure Highlights

### Services Layer
```
src/services/
├── auth/                  # Authentication service
├── positions/             # Position management service  
└── [other services]       # Additional service classes
```

### API Integration
```
src/api/
├── interceptors.api.ts    # Axios interceptors with auth
├── helpers.api.ts         # API helper functions
└── index.ts               # Export all API utilities
```

### Hooks
```
src/hooks/
├── positions/             # Position-related hooks
├── auth/                  # Authentication hooks
└── [other hooks]          # Additional custom hooks
```

## Core Components

### Admin Interface
- User management dashboard with CRUD operations
- Position management system 
- Organization and subsidiary management
- Responsive sidebar navigation with breadcrumb support

### Data Tables
- Custom DataTable component with sorting and filtering
- Selection capabilities for rows
- Column definitions with specific cell rendering

### Authentication Forms
- Login form with validation
- Auth page layout with branding
- Protected route handling

## API Endpoints

### Position Service Endpoints
- `GET /api/positions` - Get all positions
- `POST /api/positions` - Create new position
- `PUT /api/positions/:id` - Update position
- `DELETE /api/positions/:id` - Delete position

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - User logout

## Key Features Implemented

1. **Admin Dashboard**: Complete administrative interface
2. **User Management**: Full CRUD operations for users
3. **Position Management**: CRUD operations with data tables
4. **Organization Management**: Hierarchical organization structure
5. **Subsidiary Management**: Related entities management
6. **Authentication System**: Secure login and token management
7. **Responsive UI**: Mobile-friendly interface using shadcn/ui components

## Development Approach

### Type Safety
- Comprehensive TypeScript interfaces for all data models
- Strict typing for API responses and form data
- Type definitions for service methods and hooks

### Performance
- React Query caching for API data
- Component-level memoization where appropriate
- Efficient data fetching patterns

### Code Organization
- Service layer for business logic separation
- Custom hooks for reusable data fetching logic
- Modular component structure with clear responsibilities

## Configuration Files

### API Configuration (`src/config/api.config.ts`)
- Centralized endpoint definitions
- Base URL configuration
- Endpoint routing helpers

### Environment Variables
- `SERVER_URL` - Backend API base URL
- `APP_DOMAIN` - Application domain for cookies

## Testing Strategy

### Component Testing
- Unit tests for custom hooks
- Integration tests for data tables
- Form validation testing

### API Testing
- Mock API responses for development
- End-to-end testing of authenticated flows

## Deployment Considerations

### Build Process
- Next.js optimized builds
- Tree-shaking for unused components
- Production-ready optimizations

### Security
- Secure cookie configuration
- Token management best practices
- CORS and security headers