# React Router Tutorial App

## Overview
This project is a comprehensive React application demonstrating the usage of React Router v6 for client-side routing. It includes various route types, nested routes, protected routes, and authentication flow management.

## Features
- Basic routing with React Router v6
- Navigation with `Link` and `NavLink` components
- URL parameter handling with dynamic routes
- Nested routes with outlet rendering
- Protected routes with authentication checks
- Authentication state management (login/logout functionality)
- 404 page handling with wildcard routes

## Project Structure

```
src/
├── App.js              # Main application with router configuration
├── component/
│   └── ProtectedRoute.js  # Component for route protection logic
└── layout/
    ├── Dashboard.js    # Protected dashboard page
    ├── FeaturedProducts.js # Featured products page (nested route)
    ├── Home.js         # Home page component
    ├── Login.js        # Login page with authentication handling
    ├── NewProducts.js  # New products page (nested route)
    ├── NotFound.js     # 404 page for unmatched routes
    ├── Products.js     # Products page with nested route outlet
    ├── Search.js       # Search page component
    └── User.js         # User profile page with dynamic parameters
```

## Route Structure
- `/` - Home page
- `/user/:userId` - User profile page (dynamic parameter)
- `/search` - Search page
- `/login` - Login page
- `/dashboard` - Protected dashboard (requires authentication)
- `/products` - Products main page
  - `/` (index) - Default products view
  - `/products/featured` - Featured products page
  - `/products/new` - New products page
- `*` - 404 Not Found page (catches all unmatched routes)

## Authentication Flow
The application implements a simple authentication system:
1. Authentication state is managed with React useState hook
2. The `Login` component handles authentication via the `onLogin` prop
3. Protected routes are secured using the `ProtectedRoute` component
4. Navigation items conditionally render based on authentication status
5. Dashboard is only accessible when logged in

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager

### Installation Steps
1. Clone the repository
   ```
   git clone https://github.com/kirangautam45/react-router-tutorial
   cd react-router-tutorial
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. The application will be available at `http://localhost:3000`

## Key Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing library
- `react-scripts` - Development and build tools

## How to Use

### Basic Navigation
The main navigation is available at the top of every page. Use the navigation links to move between different sections of the application.

### Authentication
- Click the "Login" button to authenticate
- After login, additional protected routes (Dashboard) become available
- Click "Logout" to end your session

### URL Parameters
- The User Profile page demonstrates URL parameter usage
- The route `/user/:userId` captures the `userId` parameter for dynamic rendering

### Nested Routes
- The Products section demonstrates nested routes
- Parent route renders the container component
- Child routes render within the parent's `<Outlet />` component

## Component Details

### ProtectedRoute
This component checks authentication status and redirects unauthorized users:

```jsx
// Example of the ProtectedRoute component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
```

### Products with Nested Routes
The Products component demonstrates how to set up nested routes with an Outlet:

```jsx
// Example of Products component with nested routes
import { Outlet, Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <nav>
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New Arrivals</Link>
      </nav>
      
      {/* This is where nested route components render */}
      <Outlet />
    </div>
  );
}
```

## Development Notes

### Adding New Routes
To add a new route to the application:

1. Create a new component in the layouts folder
2. Import the component in App.js
3. Add a new Route element in the Routes configuration
4. Add a navigation link if needed

### Protecting Additional Routes
To protect a new route:

1. Wrap the component with the ProtectedRoute component
2. Pass the isAuthenticated state as a prop

## Troubleshooting

### Common Issues
- **Blank Page**: Check that your route paths are correct
- **Cannot Access Protected Route**: Ensure you're logged in
- **Nested Routes Not Rendering**: Confirm you've included the Outlet component
- **URL Parameters Not Working**: Verify correct parameter syntax (:paramName)

## Future Enhancements
- Add route transitions and animations
- Implement more complex authentication with JWT
- Add query parameter handling examples
- Implement route-based code splitting
- Add route guards based on user roles

