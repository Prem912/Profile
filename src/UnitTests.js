import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Counter from "./components/Counter";

test("Counter increments correctly", () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText("Increment");
  const countDisplay = getByText("Count: 0");
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("Count: 1");
});
