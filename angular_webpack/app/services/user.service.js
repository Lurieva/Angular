function UserService() {
    "ngInject";

    const users = [
        {
            firstName: 'John',
            lastName: 'Deer',
            email: 'john_deer@gmail.com',
            phoneNumber: '443537523'
        }
    ];

    return {
        getUsers () {
            return users;
        },

        createUser (user) {
            let newUser = {
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                phoneNumber : user.phoneNumber
            };

            users.push(newUser);
        }
    }
}

export default UserService;