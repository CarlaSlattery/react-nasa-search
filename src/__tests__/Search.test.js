import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";

const Button = ({ onSubmit }) => <button onSubmit={onSubmit}></button>;

describe("Search", () => {
  const setSearchResults = jest.fn();

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={setSearchResults} />
    );
    expect(asFragment()).toMatchSnapshot();

    const searchElement = screen.getByRole("textbox");
    expect(searchElement).toBeInTheDocument();

    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
  });
});
