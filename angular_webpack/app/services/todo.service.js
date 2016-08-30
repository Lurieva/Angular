function TodoService() {
    "ngInject";
    this.storage = window.localStorage;
    let data = localStorage.getItem('todos');

    return {
        getTodos () {
            this.todos = data ? JSON.parse(data) : [];
            return this.todos;
        },

        createTodo (todo) {
            let newTodo = {
                id: todo.todoText,
                todoText: todo.todoText,
                messages: []
            };

            this.todos.push(newTodo);
            this.save();
        },

        save () {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },

        removeTodo (todo) {
            this.todos.splice(todo, 1);
            this.save();
        },

        clear () {
            localStorage.clear();
        }
    }
}

export default TodoService;
