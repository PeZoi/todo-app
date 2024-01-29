export const todoListSelector = (state) => {
	const filters = state.todos.filters;

	return state.todos.todoList.filter((todo) => {
		const hasSearchText = todo.name.includes(filters.search);
		const isCompleted =
			filters.status === "Completed"
				? todo.completed === true
				: todo.completed === false;
		const hasPriority =
			filters.priority.length === 0 ||
			filters.priority.includes(todo.priority);

		return hasSearchText && isCompleted && hasPriority;
	});
};
