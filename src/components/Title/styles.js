import styled from "styled-components";

export const Title = styled.h1`
	text-align: center;
	font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
	color: ${({ theme }) => theme.colors.title};
	text-transform: uppercase;
`;
