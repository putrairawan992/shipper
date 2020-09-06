import React from "react";
import { act, render } from "@testing-library/react";
import DriverManagement from "./index";
import Random from "../../repository/Random";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("renders a message", async () => {
  await act(async () => {
    const { getByText } = render(<DriverManagement />);

    const response = await Random.getUser({
      params: { results: 30 },
    })
    
    if (response.status === 200) {
      const linkElement = getByText("DRIVER MANAGEMENT");
      expect(linkElement).toBeInTheDocument();
    } else {
      const linkElement = getByText("This text is not exist");
      expect(linkElement).toBeInTheDocument();
    }
  });
});
