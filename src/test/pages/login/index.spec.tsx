import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../pages/login";

describe("Login page", () => {
  it("Should render the login page correctly", () => {
    const { container } = render(<LoginPage />);

    const button = screen.getByRole("button", { name: /login/i });

    expect(container).toMatchSnapshot();
    expect(button).toBeInTheDocument();
  });
});
