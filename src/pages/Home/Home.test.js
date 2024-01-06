import Home from ".";
import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("services/categories");

describe("Testing Home page", () => {
  describe("Anuncie", () => {
    test("It should redirect to the advertise page", () => {
      const buttonAdvertise = screen.getByTestId("home-botao-anunciar");

      userEvent.click(buttonAdvertise);

      expect(?).toHaveBeenCalledWith("/anuncie");
    });
  });

  describe("Categories", () => {
    it("Should render with categories", async () => {
      render(<Home />);
      const categories = await screen.findAllByAltTestId("home-categorias");

      expect(categories).toHaveLength(2);
    });
  });
});
