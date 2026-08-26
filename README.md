# GATOM Admin Dashboard

A modern administrative interface built with Next.js 16 and shadcn/ui components for managing users, positions, organizations, and subsidiaries.

## Project Overview

This is a comprehensive admin dashboard application designed to manage organizational data structures. The system provides full CRUD operations for users, positions, organizations, and subsidiaries with a secure authentication system and responsive UI.

## Key Features

### Authentication System
- JWT-based authentication with refresh tokens
- Protected routes via Next.js middleware
- Secure token storage in cookies
- Automatic token refresh on 401 errors
- Login and registration functionality

### Data Management
- User management with full CRUD operations
- Position management system with data tables
- Organization hierarchy management
- Subsidiary relationships management
- Responsive UI using shadcn/ui components

### Technical Architecture
- Next.js App Router with TypeScript
- Component-based architecture using shadcn/ui
- Service layer pattern for API interactions
- Custom hooks for data fetching and business logic
- Context providers for global state management
- React Query for API data fetching and caching
- Type-safe API interactions using TypeScript interfaces

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── services/            # Business logic and API service classes
├── hooks/               # Custom React hooks for data fetching
├── api/                 # API configuration and interceptors
├── types/               # TypeScript interfaces and types
├── config/              # Configuration files
├── providers/           # Context providers
└── utils/               # Utility functions
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

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env` file:
```env
SERVER_URL=http://localhost:3000
APP_DOMAIN=localhost
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Production Build

To build for production:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Security Features

- JWT-based authentication with secure token handling
- Protected routes and middleware
- Axios interceptors for authenticated requests
- Secure cookie configuration
- Token management best practices

## Responsive Design

The application uses shadcn/ui components to provide a responsive interface that works well on:
- Desktop browsers
- Tablets
- Mobile devices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.