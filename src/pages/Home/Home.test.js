import { render } from "test-utils";
import Home from ".";

describe("Testing Home page", () => {
  test("testing", () => {
    render(
        <Home />      
    );
    expect(true).toBeTruthy();
  });
});
