const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    // __dirname => direccion del fichero en el que me encuentro
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index', {title: 'First Website'});
});

router.get('/contact', (req, res)=> {
    res.render('contact', {title: 'Page contact'});
});

router.post('/new-contact', (req, res) => {
    console.log(req.body);
    res.send('received');
});

module.exports = router;
