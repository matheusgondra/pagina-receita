import { renderTheme } from "../../styles/renderTheme";
import { screen } from "@testing-library/react";
import { PreparationList } from ".";

describe("<PreparationList />", () => {
	it("should render PreparationList", () => {
		renderTheme(<PreparationList />);

		const list = screen.getByRole("list");

		expect(list).toBeInTheDocument();
	});

	it("should render with 9 items", () => {
		renderTheme(<PreparationList />);

		const list = screen.getByRole("list");
		const items = list.children.length;

		expect(items).toBe(5);
	});
});
