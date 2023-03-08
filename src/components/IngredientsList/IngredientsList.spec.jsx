import { renderTheme } from "../../styles/renderTheme";
import { screen } from "@testing-library/react";
import { IngredientsList } from ".";

describe("<IngredientsList />", () => {
	it("should render IngredientsList", () => {
		renderTheme(<IngredientsList />);

		const list = screen.getByRole("list");

		expect(list).toBeInTheDocument();
	});

	it("should render with 9 items", () => {
		renderTheme(<IngredientsList />);

		const list = screen.getByRole("list");
		const items = list.children.length;

		expect(items).toBe(9);
	});
});
