import styled from "styled-components";

export const Footer = styled.footer`
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.fonts.sizes.small};
	text-align: center;
	width: 100%;
	margin: 3.2rem 0;

	a {
		margin-left: 0.5rem;
	}
`;
