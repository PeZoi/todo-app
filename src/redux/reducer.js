import { createSlice } from "@reduxjs/toolkit";
import { saveLocalStorage, getLocalStorage } from "../functions/localstorage";

const initState = {
	filters: {
		search: "",
		status: "All",
		priority: [],
	},
	todoList: [],
};

const todoReducer = createSlice({
	name: "todoList",
	initialState: initState,
	reducers: {
		getTodoList: (state, actions) => {
			const data = getLocalStorage("todoList");
			if (data) {
				state.todoList = data;
			}
		},
		addTodo: (state, action) => {
			const todoItem = action.payload;
			state.todoList.push(todoItem);
			saveLocalStorage("todoList", state.todoList);
		},
		deleteTodo: (state, action) => {
			const idTodo = action.payload;
			state.todoList = state.todoList.filter((todo) => {
				return todo.id !== idTodo;
			});
			saveLocalStorage("todoList", state.todoList);
		},
		toggleCompletedTodo: (state, action) => {
			const isCompleted = action.payload.completed;
			const todoId = action.payload.id;
			state.todoList = state.todoList.map((todoItem) =>
				todoItem.id === todoId
					? { ...todoItem, completed: isCompleted }
					: todoItem
			);
			saveLocalStorage("todoList", state.todoList);
		},
		filters: (state, action) => {
			const newFilters = action.payload;
			state.filters = newFilters;
		},
	},
});

// Export
const { reducer, actions } = todoReducer;
export const {
	addTodo,
	toggleCompletedTodo,
	filters,
	getTodoList,
	deleteTodo,
} = actions;
export default reducer;
