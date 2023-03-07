import * as Styled from "./styles";
import P from "prop-types";

export function SubTitle({ children }) {
	return <Styled.SubTile>{children}</Styled.SubTile>;
}

SubTitle.propTypes = {
	children: P.string.isRequired
};
