module.exports = (app) => {

    // default route
    app.get('/', function (req, res) {
        return res.send({ error: true, message: 'Hii i am a root.' })
    });

    const userController = require('./controllers/user');

    app.get('/users', userController.get_users);

    app.get('/user/:id', userController.get_specific_user);

    app.post('/user', userController.add_user);

    app.put('/user', userController.update_user);

    app.delete('/user', userController.remove_user);

}
