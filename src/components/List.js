import ListItem from "./ListItem";
import key from "../helpers/randomKey";

export default function List() {
	const list = [
		"Пройти курс react",
		"Написать компонент ToDo",
		"Сдать задание",
		"Радоваться жизни",
	];

	return list.map((item) => (
		<ListItem key={key()} value={item}>
			{item}
		</ListItem>
	));
}
