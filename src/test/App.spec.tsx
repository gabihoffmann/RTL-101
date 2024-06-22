import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("Test the App successfully", () => {
  it("Should render the App component", () => {
    render(<App />);
    // prints out the jsx in the App component unto the command line
    screen.debug();
  });

  it("Should show the text 'Hello world!' in the document", () => {
    render(<App />);
    const hello = screen.getByText(/hello world!/i);
    expect(hello).toBeInTheDocument();
  });

  it("Should matches the snapshot", () => {
    const { container } = render(<App />);
    // use: press u to update snapshot
    expect(container).toMatchSnapshot();
  });
});
