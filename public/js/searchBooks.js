// Search Books Section
const searchIinput = document.getElementById('search_book_input');
const results = document.getElementsByClassName('search__result')[0];

$(searchIinput).on('keyup', (e) => {
    const inputVal = e.target.value.toLowerCase();
    
    if (inputVal === '') {
        clearResults();
        $('.result__not__found').removeClass('hidden');
    }

    if (e.key === 'Enter') {
        $('.result__not__found').addClass('hidden');
        requestApi(inputVal);
    }
});

function requestApi(input) {
    fetch('./api/booksAPI.json')
        .then(res => res.json())
        .then((data) => {
            let books = data.collections;
            displayContent(books, input)
        })
}

function displayContent(data, search) {
    data.forEach(object => {
        let itemFound = object.name.toLowerCase().includes(search);

        if (itemFound) {
            let bookImg = object.imgURL;

            let bookDiv = document.createElement('div');
            $(bookDiv).addClass('card text-bg-light search__result__card');

            let bookCard = document.createElement('img');
            bookCard.src = `./img/books/${bookImg}.jpg`
            bookCard.classList.add('card-img')
            bookCard.alt = object.name;

            bookDiv.appendChild(bookCard)
            results.appendChild(bookDiv);
        }
    });
}

function clearResults() {
    do {
        results.childNodes.forEach((item) => {
            results.removeChild(item);
        });
    } while (results.childNodes.length > 0);
}