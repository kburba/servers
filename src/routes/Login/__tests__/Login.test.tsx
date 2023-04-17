import { render, screen } from '../../../utils/test-utils';
import { Login } from '../Login';

describe('Login component', () => {
  it('should render', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
