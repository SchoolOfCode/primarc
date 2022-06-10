import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/P r i m a r c/i);
  expect(linkElement).toBeInTheDocument();
});
