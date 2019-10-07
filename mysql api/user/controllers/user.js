const db = require('../db');

// Retrieve all users 
const get_users = (req, res) => {
    db.query('SELECT * FROM users', function (error, results, fields) {
        if (error) res.send({ error: true, message: 'get_users error.' });
        return res.send({ error: false, data: results, message: 'Users list.' });
    });
}

// Retrieve user with id 
// http://localhost:1111/user/10
const get_specific_user = (req, res) => {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    db.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
        if (error) res.send({ error: true, message: 'get_specific_user error.' });
        return res.send({ error: false, data: results[0], message: 'Users list.' });
    });
}

// Add a new user  
const add_user = (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;
    if (!email && !pass) {
        return res.status(400).send({ error: true, message: 'Please provide user and pass' });
    }
    db.query("INSERT INTO users (email, pass) VALUES (?,?)", [email, pass], function (error, results, fields) {
        if (error) res.send({ error: true, message: 'add_user error.' });
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
};

//  Update user with id                 
const update_user = (req, res) => {
    let user_id = req.body.user_id;
    let email = req.body.email;
    if (!user_id || !email) {
        return res.status(400).send({ error: user, message: 'Please provide email and user_id' });
    }
    db.query("UPDATE users SET email = ? WHERE id = ?", [email, user_id], function (error, results, fields) {
        if (error) res.send({ error: true, message: 'update_user error.' });
        return res.send({ error: false, data: results, message: 'Email has been updated successfully.' });
    });
}

//  Delete user
const remove_user = (req, res) => {
    let user_id = req.body.user_id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    db.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) res.send({ error: true, message: 'remove_user error.' });
        return res.send({ error: false, data: results, message: 'User has been removed successfully.' });
    });
}

module.exports = {
    get_users, get_specific_user, add_user, update_user, remove_user
};