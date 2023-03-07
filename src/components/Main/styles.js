import styled from "styled-components";

export const Main = styled.main`
	background-color: ${({ theme }) => theme.colors.recipeBg};
	margin: 0 auto;
	margin-top: 3.2rem;
	padding: 3.2rem;
	max-width: 82rem;
	width: 80%;
	border-radius: 0.8rem;
	color: ${({ theme }) => theme.colors.secondary};
	font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;
