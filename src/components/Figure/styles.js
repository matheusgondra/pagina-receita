import styled from "styled-components";

export const Figure = styled.figure`
	border-radius: 10px;
	margin-bottom: 3.2rem;

	img {
		max-width: 100%;
		width: 100%;
		border-radius: 8px;
		height: 350px;
		object-fit: cover;
		margin-top: 1.6rem;
	}

	figcaption {
		text-align: right;
		font-size: ${({ theme }) => theme.fonts.sizes.small};
		color: ${({ theme }) => theme.colors.primary};
	}
`;
