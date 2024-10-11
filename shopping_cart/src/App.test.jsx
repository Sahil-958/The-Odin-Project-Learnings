// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("heading ", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("another one",  () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Here We go/i);
  });
});

