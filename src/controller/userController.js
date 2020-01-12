const User = require('../model/userModel');

class UserController {
    getAllUsers(request, response) {
        response.send(`Fetching all users`);
    }

    createNewUser(request, response) {
        const user = new User(request.body);
        user
            .save()
            .then( (savedUser) => {
                savedUser['__v'] = undefined;
                response.status(201).json({status: 'Success', data: savedUser});
            } )
            .catch( (error) => {
                response.status(422).json({status: 'Failure', message: 'Invalid data'});
            } );
    }
}

module.exports = UserController;