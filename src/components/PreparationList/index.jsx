import * as Styled from "./styles";

const steps = [
	"Peneire em um recipiente a farinha de trigo, o açúcar, o amido, o fermento e o sal. Reserve.",
	"Em outro recipiente misture os ovos batidos com leite, a manteiga derretida e a essência de baunilha.",
	"Despeje sobre a mistura de farinha e rapidamente incorpore os ingreientes.",
	"Aqueça o aparelho de Waffles. Coloque uma concha rasa de massa e	espalhe até cobrir o molde do aparelho, feche a tampa e deixe assar	até a masssa ficar bem dourada.",
	"Retire com espátulas de silicone. Sirva com mel, frutas ou geleia"
];

export function PreparationList() {
	return (
		<Styled.PreparationList>
			{steps.map((step, index) => (
				<li key={index}>{step}</li>
			))}
		</Styled.PreparationList>
	);
}
