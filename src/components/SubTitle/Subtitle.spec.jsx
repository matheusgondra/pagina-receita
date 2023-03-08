import { screen } from "@testing-library/react";
import { SubTitle } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<SubTitle />", () => {
	it("should render SubTitle", () => {
		renderTheme(<SubTitle>texto</SubTitle>);

		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toBeInTheDocument();
	});

	it("should render with text uppercase", () => {
		renderTheme(<SubTitle>texto</SubTitle>);

		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			"text-transform": "uppercase"
		});
	});
});
