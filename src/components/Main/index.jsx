import * as Styled from "./styles";
import { Figure } from "../Figure";
import { IngredientsList } from "../IngredientsList";
import { PreparationList } from "../PreparationList";
import { SubTitle } from "../SubTitle";
import { Title } from "../Title";

export function Main() {
	return (
		<Styled.Main>
			<Title>Walffe Clássico</Title>

			<Figure
				src="https://images.pexels.com/photos/67024/pexels-photo-67024.jpeg?auto=compress&cs=tinysrgb&w=600"
				alt="Waffles no prato"
				description="Receita de waffle clássico"
			/>

			<SubTitle>Ingredientes</SubTitle>
			<IngredientsList />

			<SubTitle>Modo de preparo</SubTitle>
			<PreparationList />

			<SubTitle>Informações adicionais</SubTitle>
			<p>Você poderá servir estes waffles no café da manhã com geleia.</p>
		</Styled.Main>
	);
}
