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

	it("should render with correct description", () => {
		renderTheme(
			<Figure
				alt="texto alternativo da imagem"
				description="descrição da imagem"
				src="imagem.png"
			/>
		);
		const descrition = screen.getByText("descrição da imagem");

		expect(descrition.innerHTML).toBe("descrição da imagem");
	});

	it("should render with correct image", () => {
		renderTheme(
			<Figure
				alt="texto alternativo da imagem"
				description="descrição da imagem"
				src="imagem.png"
			/>
		);
		const img = screen.getByRole("img");

		expect(img).toHaveAttribute("src", "imagem.png");
		expect(img).toHaveAttribute("alt", "texto alternativo da imagem");
	});
});
