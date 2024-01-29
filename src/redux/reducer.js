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
		toggleCompletedTodo: (state, action) => {
			const isCompleted = action.payload.completed;
			const todoId = action.payload.id;
			state.todoList = state.todoList.map((todoItem) =>
				todoItem.id === todoId
					? { ...todoItem, completed: isCompleted }
					: todoItem
			);
		},
		filters: (state, action) => {
			const newFilters = action.payload;
			state.filters = newFilters;
		},
	},
});

// Export
const { reducer, actions } = todoReducer;
export const { addTodo, toggleCompletedTodo, filters } = actions;
export default reducer;
