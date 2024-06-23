import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

import { Header } from "../../../components/header";

/**
 * Learn about Queries
 * @url https://testing-library.com/docs/queries/about/#overview
 */

const TITLE = "Title";
const TITLE_REGEX = new RegExp(TITLE, "i");

beforeAll(() => {
  render(<Header />);
});

describe("Test the Header component successfully", () => {
  it("Should test the Header component using getBy query", () => {
    // GET_BY throw error if no element matches or more than one element is found
    // BY_TEXT  search form all elements that have a text node who matching the given text match
    const title = screen.getByText(TITLE);
    const allTitles = screen.getAllByText(TITLE_REGEX);

    expect(title).toBeInTheDocument();
    expect(allTitles).toHaveLength(2);
  });

  it("Should test the Header component using queryBy query", () => {
    // QUERY_BY return the matching node for a query, and return null if no elements match
    const title = screen.queryByText(TITLE);
    const wrongTitle = screen.queryByText("Wrong Title");
    console.log(wrongTitle);

    expect(title).toBeInTheDocument();
    expect(wrongTitle).not.toBeInTheDocument();
  });

  it("Should test the Header component using findBy query", async () => {
    // FIND_BY return a promise which resolves when an element is found or is rejected after a default timeout. It is a combination of getBy and waitFor queries.
    const button = screen.getByRole("button", { name: "add" });
    fireEvent.click(button);
    await screen.findByText("Counter: 1");
  });
});
