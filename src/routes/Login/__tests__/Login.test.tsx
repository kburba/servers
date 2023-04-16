import { LoginTestId } from '../../../shared/testIds';
import { render, screen, userEvent } from '../../../utils/test-utils';
import { Login } from '../Login';

describe('Login page', () => {
  it('renders Login page', async () => {
    render(<Login />);

    const testValues = {
      username: 'testUsername',
      password: 'testPass',
    };

    const username = screen.getByTestId(LoginTestId.UsernameInput);
    const password = screen.getByTestId(LoginTestId.PasswordInput);
    const submit = screen.getByTestId(LoginTestId.SubmitButton);

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    await userEvent.type(username, testValues.username);
    await userEvent.type(password, testValues.password);
    expect(username).toHaveValue(testValues.username);
    expect(password).toHaveValue(testValues.password);
  });
});
