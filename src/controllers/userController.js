const db = require('../connectionBBDD');
const connection = db();
const controller = {};

controller.getUsers = (req, res) => {
    connection.query('SELECT * FROM user', (err, users) => {
        if(err) 
            res.json(err);
        else if(users){
            res.json(users);
        }
    });
};

controller.getUserById = (req, res) => {
    connection.query('SELECT * FROM user WHERE id = ?',[req.params.id], (err, user) => {
        if(err) 
            res.json(err);
        else if(user){
            res.json(user);
        }
    });
};

controller.newUser = (req, res) => {
    connection.query('INSERT INTO user set ?', [req.body], (err, result) => {
        if(err) 
            res.json(err);
        else if(result){
            // res.json(result);
            res.redirect('/about');
        }
    });
};

controller.deleteUser = (req, res) => {
    connection.query('DELETE from user WHERE id = ?', [req.params.id], (err, result) => {
        if(err) 
            res.json(err);
        else if(result){
            // res.json(result);
            res.redirect('/about');
        }
    });
};

controller.editUser = (req, res) => {
    connection.query('UPDATE user set ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if(err) 
            res.json(err);
        else if(result){
            // res.json(result);
            res.redirect('/about');
        }
    });
};

module.exports = controller;