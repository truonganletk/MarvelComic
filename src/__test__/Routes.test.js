import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Router } from "react-router-dom";
import {
  createMemoryHistory,
  createBrowserHistory,
  createHistory,
} from "history";
import "@testing-library/jest-dom";
import App from "../App";
import Home from "../pages/Home";
import Header from "../layouts/Header/Header";
import userEvent from "@testing-library/user-event";

describe("Router", () => {
  test("renders Search component for /search path", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Press Enter to Search")).toBeInTheDocument();
  });

  test("renders Comics component for /comics path", () => {
    render(
      <MemoryRouter initialEntries={["/comics"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("read more")).toBeInTheDocument();
  });

  test("navigate to comics page when click on comics tab", async () => {
    // Create a history object
    const history = createMemoryHistory();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("HOME PAGE")).toBeInTheDocument();

    const comicsBtn = screen.getByRole("link", {
      name: "COMICS",
    });

    // userEvent.click(comicsBtn);
    fireEvent.click(comicsBtn);

    await waitFor(() => {
      expect(history.location.pathname).toBe("/comics");
    });
    expect(screen.getByText("COMICS PAGE")).toBeInTheDocument();

    // console.log(history.location.pathname);
  });
});
