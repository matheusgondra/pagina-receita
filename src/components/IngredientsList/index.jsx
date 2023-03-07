import * as Styled from "./styles";

const ingredients = [
	"2 xícaras (chá) de farinha de trigo",
	"2 colheres (sopa) de açúcar",
	"2 colheres (sopa) de fermento em pó",
	"1/2 colher (chá) de sal",
	"2 colheres de amido de milho",
	"3 ovos batidos",
	"4 colheres (sopa) de manteiga sem sal derretida",
	"1 e 3/4 de xícara (chá) de leite",
	"1 colher (sopa) de essência de baunilha"
];

export function IngredientsList() {
	return (
		<Styled.IngredientsList>
			{ingredients.map((ingredient, index) => (
				<li key={index}>{ingredient}</li>
			))}
		</Styled.IngredientsList>
	);
}
