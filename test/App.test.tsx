import { render, screen } from "@testing-library/react";
import App from "../src/app/layout/App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/Welcome to Revents/i);
    expect(headline).toBeInTheDocument();
  });
});
