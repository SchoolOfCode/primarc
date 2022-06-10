import { render, screen } from '@testing-library/react';
import Card from './index'

test('renders card', () => {
  render(<Card />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});