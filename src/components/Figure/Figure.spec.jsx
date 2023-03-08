import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Figure } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<Figure />", () => {
	it("should render Figure", () => {
		renderTheme(
			<Figure
				alt="texto alternativo da imagem"
				description="descrição da imagem"
				src="imagem.png"
			/>
		);

		const figure = screen.getByRole("figure");

		expect(figure).toBeInTheDocument();
	});
});
