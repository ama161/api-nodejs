const controller = {};

controller.get = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, users) => {
            if(err) 
                res.json(err);
            else if(users){
                res.json(users);
            }
            console.log(users);
        });
    });
};

module.exports = controller;