/* eslint-disable */
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const testingQueryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
