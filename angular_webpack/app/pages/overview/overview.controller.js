'use strict';

class OverviewController {
    constructor(TodoService) {
        "ngInject"
        this.TodoService = TodoService;
        this.name = 'overview';
        this.todos = [];
        this.todoinit = {};
        this.currentIndex = 0;
        this.reset();
    }

    $onInit(){
        this.todos = this.TodoService.getTodos();
        console.log(this.todos);
    }

    findCurrentIndex ($index) {
        this.currentIndex = $index;
    }

    save (todo) {
        if (!todo.todoText) {return}
        this.TodoService.createTodo(todo);
        this.reset();
    }

    reset () {
        this.todo = angular.copy(this.todoinit);
    }

    remove (i) {
        this.TodoService.removeTodo(i);
    }
}

export default OverviewController;
