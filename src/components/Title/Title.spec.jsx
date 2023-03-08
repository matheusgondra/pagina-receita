import { screen } from "@testing-library/react";
import { Title } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<Title />", () => {
	it("should render Title", () => {
		renderTheme(<Title>texto</Title>);

		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toBeInTheDocument();
	});

	it("should render with text uppercase", () => {
		renderTheme(<Title>texto</Title>);

		const heading = screen.getByRole("heading", { name: "texto" });

		expect(heading).toHaveStyle({
			"text-transform": "uppercase"
		});
	});
});
