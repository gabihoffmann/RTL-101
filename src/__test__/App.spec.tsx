import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    // prints out the jsx in the App component unto the command line
    screen.debug();
  });

  it("Hello world is in the document", () => {
    render(<App />);
    const hello = screen.getByText(/hello world!/i);
    expect(hello).toBeInTheDocument();
  });
});
