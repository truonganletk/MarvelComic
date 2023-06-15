import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import QueryParam from "../components/QueryParam";
import "@testing-library/jest-dom";

describe("MyComponent", () => {
  it("renders the ID query parameter from the URL", () => {
    render(
      <MemoryRouter initialEntries={["/qpc?id=123"]}>
        <QueryParam />
      </MemoryRouter>
    );
    expect(screen.getByText("ID: 123")).toBeInTheDocument();
  });
});
