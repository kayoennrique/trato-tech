import { render } from "test-utils";
import Home from ".";

describe("Testing Home page", () => {
  test("testing", () => {
    render(<Home />);
    const categories = screen.getAllByTestId('home-categorias');
    expect(categories).toHaveLength(5);
    expect(true).toBeTruthy();
  });
});
