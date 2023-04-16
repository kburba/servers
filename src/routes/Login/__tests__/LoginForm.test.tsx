import { vi } from 'vitest';

import { LoginTestId } from '../../../shared/testIds';
import { render, screen, userEvent } from '../../../utils/test-utils';
import { LoginForm } from '../LoginForm';

const testValues = {
  username: 'testUsername',
  password: 'testPass',
  usernameError: 'Please enter your username',
  passwordError: 'Please enter your password',
};

describe('Login form component', () => {
  it.each([
    [0, true, true],
    [1, false, true],
    [0, false, false],
  ])(
    'submit should be called "%s"\n times when isLoading is "%s",\n with username and password: "%s"',
    async (expectedCalls, isLoading, withValues) => {
      const mockSubmit = vi.fn();

      render(<LoginForm onSubmit={mockSubmit} isLoading={isLoading} />);

      const username = screen.getByTestId(LoginTestId.UsernameInput);
      const password = screen.getByTestId(LoginTestId.PasswordInput);
      const submit = screen.getByTestId(LoginTestId.SubmitButton);

      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(submit).toBeInTheDocument();

      if (withValues) {
        await userEvent.type(username, testValues.username);
        await userEvent.type(password, testValues.password);
        expect(username).toHaveValue(testValues.username);
        expect(password).toHaveValue(testValues.password);
      }

      await userEvent.click(submit);

      if (!withValues) {
        expect(screen.getByText(testValues.usernameError)).toBeInTheDocument();
        expect(screen.getByText(testValues.passwordError)).toBeInTheDocument();
      }

      expect(mockSubmit).toHaveBeenCalledTimes(expectedCalls);
    },
  );
});
