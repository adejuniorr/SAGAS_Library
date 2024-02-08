const express       = require('express');
const app           = express();
const path          = require('path');
const handlebars    = require('express-handlebars');
const booksCollections      = require('./api/books/collections.json')

// SERVER
const PORT = '3000';

app.listen(PORT, () => {
    console.log('Server online');
})


// Using static files
app.use(express.static(path.join(__dirname, 'public')));


// Setting up handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// ROUTES
app.get('/', (req,res) => {
    res.render('index', {booksCollections});
})

app.get('/login', (req,res) => {
    res.render('login');
});