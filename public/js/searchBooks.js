// Search Books Section
const searchInput = document.getElementById('search_book_input');
const results = document.getElementsByClassName('search__result')[0];

$(searchInput).on('keyup', (e) => {
    const inputVal = e.target.value.toLowerCase();    

    $('.result__not__found').addClass('hidden');
    $(results).removeClass('hidden');
    clearResults();
    requestApi(inputVal);

    if (inputVal === '') {
        clearResults();
        $('.result__not__found').removeClass('hidden');
        $(results).addClass('hidden');
    }
});

function requestApi(input) {
    fetch('./api/booksAPI.json')
        .then(res => res.json())
        .then((data) => {
            let collections = data.collections;
            let books = data.books;
            displayContent(collections, input)
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

// Top 3 Books