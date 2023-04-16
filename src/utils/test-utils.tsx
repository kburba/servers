import { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach } from 'vitest';

import { QueryClientProvider } from '@tanstack/react-query';
import { cleanup, render, RenderOptions } from '@testing-library/react';

import { testingQueryClient } from '../api';

afterEach(() => {
  cleanup();
});

export const AllTheProviders = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <QueryClientProvider client={testingQueryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render method
export { customRender as render };

