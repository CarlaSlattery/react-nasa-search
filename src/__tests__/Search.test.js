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
  });
  it("calls onSubmit prop when clicked", () => {
    const handleSubmit = jest.fn();
    render(<Button onSubmit={handleSubmit}>Go!</Button>);
    fireEvent.click(screen.getByText(/go/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
