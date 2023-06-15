import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";
import React, { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

describe("Button", () => {
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  // test("button click", () => {
  //   const onClick = jest.fn();
  //   render(<Button onClick={onClick} />);
  //   const btn = screen.getByRole("button");
  //   fireEvent.click(btn);
  //   expect(onClick).toBeCalled();
  // });

  // test("button label props", () => {
  //   render(<Button label="hello world" />);
  //   expect(
  //     screen.getByRole("button", { name: "hello world" })
  //   ).toBeInTheDocument();
  // });

  test("button disabled state", () => {
    useStateMock.mockImplementationOnce((init) => [init, setState]);
    render(<Button />);
    const btn = screen.getByRole("button");
    expect(btn).not.toBeDisabled();
  });

  test("button not disabled state", () => {
    useStateMock.mockImplementationOnce(() => [true, setState]);
    render(<Button isDisabled={true} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});
