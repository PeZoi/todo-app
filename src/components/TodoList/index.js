import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../redux/selector";
import { addTodo } from "../../redux/reducer";

export default function TodoList() {
	const dispatch = useDispatch();
	const todoList = useSelector(todoListSelector);

	const [todoName, setTodoName] = useState("");
	const [priority, setPriority] = useState("Medium");

	const handleAddButtonClick = () => {
		if (todoName.trim().length > 0) {
			dispatch(
				addTodo({
					id: uuidv4(),
					name: todoName,
					completed: false,
					priority: priority,
				})
			);
			setPriority("Medium");
			setTodoName("");
		} else {
			alert("Vui lòng nhập tên công việc");
		}
	};

	return (
		<Row style={{ height: "calc(100% - 40px)" }}>
			<Col
				span={24}
				style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
			>
				{todoList.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						name={todo.name}
						priority={todo.priority}
						completed={todo.completed}
					/>
				))}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: "flex" }} compact>
					<Input
						value={todoName}
						onChange={(e) => setTodoName(e.target.value)}
					/>
					<Select
						defaultValue='Medium'
						value={priority}
						onChange={(value) => {
							setPriority(value);
						}}
					>
						<Select.Option value='High' label='High'>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option value='Medium' label='Medium'>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option value='Low' label='Low'>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button type='primary' onClick={handleAddButtonClick}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
