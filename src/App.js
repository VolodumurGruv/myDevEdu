import { useState } from "react";
import "./App.css";

function App() {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);

	const [showEdit, setShowEdit] = useState(-1);
	const [updateText, setUpdatedText] = useState("");

	const addItem = () => {
		if (!newItem) {
			console.log("enter text");
			return;
		}

		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem,
		};

		setItems((oldList) => [...oldList, item]);
		setNewItem("");
	};

	const deleteItem = (id) => {
		const newArr = items.filter((item) => item.id !== id);
		setItems(newArr);
	};

	const editText = (id, newText) => {
		const currentItem = items.filter((item) => item.id === id);
		const newItem = {
			id: currentItem.id,
			value: newText,
		};

		deleteItem(id);

		setItems((oldList) => [...oldList, newItem]);
		setNewItem("");
		setShowEdit(-1);
	};

	return (
		<div className="app">
			<h1>TODO LIST</h1>
			<input
				type="text"
				placeholder="add an item"
				value={newItem}
				onChange={(e) => {
					setNewItem(e.target.value);
				}}
			/>
			<button onClick={addItem}>Add item</button>

			<ul>
				{items.map((item) => {
					return (
						<div>
							<li key={item.id} onClick={() => setShowEdit(item.id)}>
								<span>{item.value}</span>
								<button onClick={() => deleteItem(item.id)}>X</button>
							</li>

							{showEdit === item.id ? (
								<div>
									<input
										type="text"
										value={updateText}
										onChange={(e) => {
											setUpdatedText(e.target.value);
										}}
									/>
									<button onClick={() => editText(item.id, updateText)}>Update</button>
								</div>
							) : null}
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
