import { createSlice } from "@reduxjs/toolkit";

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
		addTodo: (state, action) => {
			const todoItem = action.payload;
			state.todoList.push(todoItem);
		},
		editTodo: (state, action) => {},
		deleteTodo: (state, action) => {},
	},
});

// Export
const { reducer, actions } = todoReducer;
export const { addTodo, editTodo, deleteTodo } = actions;
export default reducer;
