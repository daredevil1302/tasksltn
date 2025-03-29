/**
 * Custom error class for API-related errors
 */
export class APIError extends Error {
  constructor(
    message: string,
    public readonly context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Handles errors in a consistent way across the application.
 * In a production environment, this could be connected to an error tracking service
 * like Sentry, LogRocket, or your own logging infrastructure.
 */
export const handleError = (error: unknown, context?: Record<string, unknown>): never => {
  // In production, you would want to send this to your error tracking service
  // Example with Sentry:
  // Sentry.captureException(error, { extra: context });
  
  if (error instanceof APIError) {
    // We already have a structured error
    throw error;
  }

  if (error instanceof Error) {
    throw new APIError(error.message, context);
  }

  throw new APIError('An unexpected error occurred', {
    originalError: error,
    ...context
  });
}; 