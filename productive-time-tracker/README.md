# Productive Time Tracker

A client-side web application built with React, TypeScript, and Vite that connects to the Productive API to manage time entries for the current day.

## Features

### List Today's Time Entries
- Display all time entries created for the current day
- Show details including time worked, description, and associated service
- Automatic refresh upon changes

### Add New Time Entries
- User-friendly form for new entries
- Input fields for description and time (in minutes)
- Automatic date setting to current day
- Service selection via predefined mapping

### Delete Time Entries
- One-click deletion functionality
- Automatic UI refresh after deletion

## Core Functionality

### Organization Membership & User Data
- Retrieves organization memberships using organization ID
- Extracts Person model (first name, last name, ID)
- Displays user information in header

### Time Entries Management

#### Fetching
- Retrieves today's entries based on user's person ID
- Implements date filtering
- Real-time updates

#### Creation
- Form-based entry creation
- Collects description and time
- Automatic date assignment
- Predefined service mapping

#### Deletion
- DELETE request implementation
- Automatic list refresh
- Error handling

### Additional Features
- Services mapping (ID to name conversion)
- Loading states with spinner
- Comprehensive error handling
- Responsive user feedback

## Technology Stack

- React with TypeScript
- Vite for development and building
- ESLint for code quality
- Prettier for code formatting
- React Hook Form for form management

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or pnpm

### Installation

```bash
# Using npm
npm install

# Using pnpm
pnpm install
```

### Development Server

```bash
# Using npm
npm run dev

# Using pnpm
pnpm run dev
```

### Production Build

```bash
# Using npm
npm run build

# Using pnpm
pnpm run build
```

## Code Quality

### Linting
```bash
npm run lint
```

### Formatting
- Files are automatically formatted on save
- Requires editor configuration: `"editor.formatOnSave": true`

## Project Structure

```
src/
├── api/         # API integration
├── components/  # React components
├── types/       # TypeScript types
├── constants/   # Constants and configs
└── helpers/     # Utility functions
```

## Development Notes

### Type Safety
- TypeScript implementation throughout
- Pragmatic approach to type safety

### Future Improvements
- Enhanced type definitions with complete API documentation
- Additional service management features
- Extended error handling
- Performance optimizations

## License

[MIT License](LICENSE)
