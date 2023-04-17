import { render, screen } from '../../../utils/test-utils';
import { Home } from '../Home';

describe('Home component', () => {
  it('should render', () => {
    render(<Home />);
    expect(screen.getByText('Servers')).toBeInTheDocument();
  });
});
