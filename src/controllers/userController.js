const controller = {};

controller.getUsers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, users) => {
            if(err) 
                res.json(err);
            else if(users){
                // res.json(users);
                res.render('user', {
                    title: "users",
                    data: users
                })
            }
            console.log(users);
        });
    });
};

controller.newUser = (req, res) => {
    console.log(req.body);
    // res.send('received');
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user set ?', [req.body], (err, users) => {
            console.log(err);
            console.log(users);
            res.redirect('/user');
        });
    });
};

module.exports = controller;