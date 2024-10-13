import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
  it('should render a button', () => {
    render(<App />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});