'use strict';

class SigninController {
    constructor(UserService) {
        "ngInject"
        this.UserService = UserService;
        this.name = 'signin';
        this.users = [];
        this.master = {};
        this.reset();
    }

    $onInit(){
        this.users = this.UserService.getUsers();
        console.log(this.users);
    }

    save (user) {
        this.UserService.createUser(user);
        console.log(this.users);
        this.reset();
    }

    reset () {
        this.user = angular.copy(this.master);
    }

    submitForm (isValid) {
        if (isValid) {
            console.info('form is valid');
            this.reset();
        }
    }
}

export default SigninController;
