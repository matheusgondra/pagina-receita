import P from "prop-types";
import * as Styled from "./styles";

export function Figure({ src, alt, description }) {
	return (
		<Styled.Figure>
			<img src={src} alt={alt} />
			<figcaption>{description}</figcaption>
		</Styled.Figure>
	);
}

Figure.propTypes = {
	src: P.string.isRequired,
	alt: P.string.isRequired,
	description: P.string.isRequired
};
