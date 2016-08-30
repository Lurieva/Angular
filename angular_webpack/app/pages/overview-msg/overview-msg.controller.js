'use strict';

class OverviewMsgController {
    constructor(TodoService) {
        "ngInject"
        this.TodoService = TodoService;
        this.name = 'overview-msg';
        this.newMsgInit = '';
    }

    reset () {
        this.newMsg = angular.copy(this.newMsgInit);
    }

    addMsg (msg) {
        this.todo.messages.push(msg);
        this.TodoService.save();
        this.reset();
    }
}

export default OverviewMsgController;
