import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: ${({ theme }) => theme.colors.mainBg};
		font-family: ${({ theme }) => theme.fonts.family.roboto};
	}

	ol, ul {
		list-style-position: inside;
	}
`;
