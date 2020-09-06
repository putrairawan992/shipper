import React from "react";
import { render } from "@testing-library/react";
import Pickup from "./index";

test("renders a message", () => {
  const { getByText } = render(<Pickup />);
  const linkElement = getByText(/Halaman Pickup/i);
  expect(linkElement).toBeInTheDocument();
});
