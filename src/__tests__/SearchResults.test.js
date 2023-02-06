import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });
});
