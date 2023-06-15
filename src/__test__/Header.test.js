import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../layouts/Header/Header";

describe("Header", () => {
  test("header render", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("render logo", () => {
    render(<Header />);
    const logo = screen
      .getAllByRole("link")
      .find((item) => item.className === "logo");

    expect(logo).toBeInTheDocument();
  });

  test("render user menu links", () => {
    render(<Header />);
    const userMenuLinks = screen.getByTestId("user-menu-links");
    expect(userMenuLinks).toBeInTheDocument();
  });

  test("searchPromoWrap style", () => {
    render(<Header />);
    const searchPromoWrap = screen.getByTestId("searchPromowrap");
    expect(searchPromoWrap).toHaveStyle({ letterSpacing: "1px" });
    // expect(searchPromoWrap.style.letterSpacing).toEqual("1px");
    // expect(searchIcon).toHaveStyle({
    //   fill: "#767676",
    //   width: "18px",
    //   height: "18px",
    // });
    // const styles = getComputedStyle(searchPromoWrap);
    // expect(styles.getPropertyValue("color")).toBe("red");
    // console.log(styles);
    // expect(searchPromoWrap).toBeInTheDocument();
  });

  test("search icon href", () => {
    render(<Header />);
    const searchIconLink = screen.getByTestId("search-link");
    expect(searchIconLink).toHaveAttribute("href", "/search");
  });
});
