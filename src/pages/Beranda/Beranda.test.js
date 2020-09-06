import React from "react";
import { render } from "@testing-library/react";
import Beranda from "./index";

test("renders a message", () => {
  const { getByText } = render(<Beranda />);
  const linkElement = getByText(/Halaman Beranda/i);
  expect(linkElement).toBeInTheDocument();
});
