import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo, deleteTodo } from "../../redux/reducer";
import { DeleteOutlined } from "@ant-design/icons";

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

	const handleDeleteTodo = () => {
		if (window.confirm("Are you sure you want to delete ?")) {
			dispatch(deleteTodo(id));
		}
	};

	return (
		<Row
			style={{
				marginBottom: 3,
				...(checked
					? { opacity: 0.5, textDecoration: "line-through" }
					: {}),
			}}
			className='relative group'
		>
			<div className='flex justify-between items-center w-full'>
				<Checkbox
					checked={checked}
					onChange={toggleCheckbox}
					className='flex-grow'
				>
					<span className='w-full'>{name}</span>
				</Checkbox>
				<Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
					{priority}
				</Tag>
			</div>
			<button
				className=' text-red-500 uppercase rounded-sm absolute top-0 -left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
				onClick={handleDeleteTodo}
			>
				<DeleteOutlined />
			</button>
		</Row>
	);
}
