import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { Toaster } from "react-hot-toast";

const { Title } = Typography;

function App() {
	return (
		<div
			style={{
				width: 500,
				margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "white",
				boxShadow: "0 0 10px 4px #bfbfbf",
				borderRadius: 5,
				height: "90vh",
			}}
			className='px-10 py-5'
		>
			<Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
			<Filters />
			<Divider />
			<TodoList />

			<Toaster />
		</div>
	);
}

export default App;
