import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<Footer />", () => {
	it("should render Footer", () => {
		renderTheme(<Footer />);

		const footer = screen.getByRole("contentinfo");

		expect(footer).toBeInTheDocument();
	});

	it("should render Footer with correct text", () => {
		renderTheme(<Footer />);

		const footer = screen.getByRole("contentinfo");

		expect(footer.textContent).toBe("Feito com 💖 porMatheus de Gondra");
	});

	it("should render Footer link with correct attributes", () => {
		renderTheme(<Footer />);

		const link = screen.getByRole("link", { name: "Matheus de Gondra" });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "https://github.com/matheusgondra");
	});
});
