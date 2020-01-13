const controller = {};

controller.getUsers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, users) => {
            if(err) 
                res.json(err);
            else if(users){
                res.json(users);
                // res.render('user', {
                //     title: "users",
                //     data: users
                // })
            }
        });
    });
};

controller.getUserById = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user WHERE id = ?',[req.params.id], (err, user) => {
            if(err) 
                res.json(err);
            else if(user){
                res.json(user);
            }
        });
    });
};

controller.newUser = (req, res) => {
    console.log(req.body);
    // res.send('received');
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user set ?', [req.body], (err, users) => {
            console.log(err);
            res.redirect('/user');
        });
    });
};

controller.deleteUser = (req, res) => {
    console.log(req.params.id);
    // res.send('received');
    req.getConnection((err, conn) => {
        conn.query('DELETE from user WHERE id = ?', [req.params.id], (err, users) => {
            if(!err)
                res.redirect('/user');
        });
    });
};

controller.editUser = (req, res) => {
    console.log(req.params.id);
    // res.send('received');
    req.getConnection((err, conn) => {
        conn.query('UPDATE user set ? WHERE id = ?', [req.body, req.params.id], (err, users) => {
            if(!err)
                res.redirect('/user');
        });
    });
};

module.exports = controller;