import React, { useState } from "react";

export default function ListItem(props) {
	const [done, setDone] = useState(false);
	return (
		<li
			style={{ textDecoration: done ? "line-through" : "unset" }}
			onClick={() => setDone(!done)}
		>
			{props.value}
		</li>
	);
}
