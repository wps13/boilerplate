import React from "react";
import { render } from "@testing-library/react";
import Title from "../components/title/title";

describe("Component - Title", () => {
  it("should render with title correctly", () => {
    const title = "Lorem ipsum";
    const { findByText } = render(<Title title={title} />);

    expect(findByText(title)).toBeDefined();
  });
});
