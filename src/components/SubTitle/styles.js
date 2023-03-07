import styled from "styled-components";

export const SubTile = styled.h2`
	text-align: center;
	font-size: ${({ theme }) => theme.fonts.sizes.large};
	color: ${({ theme }) => theme.colors.title};
	text-transform: uppercase;
	margin: 3.2rem 0;
`;
