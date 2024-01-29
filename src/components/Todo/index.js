import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo } from "../../redux/reducer";

const priorityColorMapping = {
	High: "red",
	Medium: "blue",
	Low: "gray",
};

export default function Todo({ name, priority, id, completed }) {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(completed);

	const toggleCheckbox = () => {
		setChecked(!checked);
		dispatch(toggleCompletedTodo({ id, completed: !checked }));
	};

	return (
		<Row
			justify='space-between'
			style={{
				marginBottom: 3,
				...(checked
					? { opacity: 0.5, textDecoration: "line-through" }
					: {}),
			}}
		>
			<Checkbox
				checked={checked}
				onChange={toggleCheckbox}
				style={{ flex: 1 }}
			>
				<span className='w-full'>{name}</span>
			</Checkbox>
			<Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
				{priority}
			</Tag>
		</Row>
	);
}
