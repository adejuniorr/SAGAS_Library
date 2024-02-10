const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

// SERVER
const PORT = '3000';

app.listen(PORT, () => {
    console.log('Server online');
})


// Using static files
app.use(express.static(path.join(__dirname, 'public')));


// Setting up handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// ROUTES
app.get('/', (req, res) => {
    res.render('index', { booksCollections });
})

app.get('/login', (req, res) => {
    res.render('login');
});




// Search Books Section
/* const searchIinput = document.getElementById('search_book_input');
const results = document.getElementsByClassName('search__result')[0];

$(searchIinput).on('keyup', (e) => {
    const inputVal = e.target.value.toLowerCase();
    //console.log('typing...');

    if (inputVal === '') {
        $(results).toggleClass('hidden');
        //console.log('input vazio');
    }

    requestApi(inputVal);
    $(results).removeClass('hidden');
}); */

/* function requestApi(input) {
    fetch(`http://localhost:3000/collections?q=${input}`)
        .then(res => res.json())
        .then(data => console.log(data) /* displayContent(data) )
} */

/* const path = require('path');
function requestApi(input) {
    fetch(path.join(__dirname, 'api/booksAPI.json'))
        .then(res => res.json())
        .then(data => console.log(data) /* displayContent(data) )
}

function displayContent(data) {
    if (true) {
        data.forEach(object => {
            let bookImg = object.imgURL;

            let bookDiv = document.createElement('div');
            bookDiv.classList.add('card text-bg-light search__result__card');

            let bookCard = document.createElement('img');
            bookCard.src = `public/img/books/${bookImg}.jpg`
            bookCard.classList.add('card-img')
            bookCard.alt = object.name;

            bookDiv.appendChild(bookCard)
            results.appendChild(bookDiv);
        });
    }

} */