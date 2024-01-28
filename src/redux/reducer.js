import { createSlice } from "@reduxjs/toolkit";

const initState = {
	filters: {
		search: "",
		status: "All",
		priority: [],
	},
	todoList: [{ id: 1, name: "JS", completed: false, priority: "High" }],
};

const todoReducer = createSlice({
	name: "todoList",
	initialState: initState,
	reducers: {},
});

// Export
const { reducer, actions } = todoReducer;
export const { addTodo } = actions;
export default reducer;
