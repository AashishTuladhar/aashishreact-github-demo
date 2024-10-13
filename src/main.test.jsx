import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a button', () => {
    render(<App />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});    