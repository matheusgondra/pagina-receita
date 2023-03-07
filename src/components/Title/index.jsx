import * as Styled from "./styles";
import P from "prop-types";

export function Title({ children }) {
	return <Styled.Title>{children}</Styled.Title>;
}

Title.propTypes = {
	children: P.string.isRequired
};
