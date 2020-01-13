const controller = {};

controller.getViewHome = (req, res) => {
     // __dirname => direccion del fichero en el que me encuentro
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index', {title: 'First Website'});
};

controller.getViewContact = (req, res)=> {
    res.render('contact', {title: 'Page contact'});
};

module.exports = controller;