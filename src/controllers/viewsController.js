const db = require('../connectionBBDD');
const connection = db();
const controller = {};

controller.getViewHome = (req, res) => {
     // __dirname => direccion del fichero en el que me encuentro
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index', {title: 'First Website'});
};

controller.getViewContact = (req, res)=> {
    res.render('contact', {title: 'New contact', data: null});
};

controller.getViewUsers = (req, res)=> {
    res.render('about', {title: 'User Page', data: []});
};

controller.getViewContactById = (req, res)=> {
    connection.query('SELECT * FROM user WHERE id = ?',[req.params.id], (err, user) => {
        if(err) 
            res.json(err);
        else if(user){
            console.log(user);
            res.render('contact', {title: 'Edit contact', data: user[0]});
        }
    });
};

module.exports = controller;