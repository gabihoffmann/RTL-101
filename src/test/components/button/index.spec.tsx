import { describe, expect, it, vitest } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "../../../components/button";

describe("Test the button successfully", () => {
  it("renders the button with success", () => {
    const buttonText = "Login";
    const { container } = render(<Button label={buttonText} />);
    const buttonElement = screen.getByRole("button", { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("should be call the function onClick from button with success", () => {
    const buttonText = "Login";
    const onClick = vitest.fn();

    render(<Button label={buttonText} onClick={onClick} />);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
