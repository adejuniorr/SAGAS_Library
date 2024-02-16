$('.book__card').on('click', function () {
    let bookImg = $(this).find('img')[0].src;
    let bookTitle = $(this).find('h5')[0].innerText;

    getBookDescription(bookTitle)
        .then((res) => console.log(res))

});

function getBookDescription(bookTitle) {
    return new Promise((resolve, reject) => {
        fetch('./api/booksAPI.json')
            .then(res => res.json())
            .then((data) => { 
                const book = data.books.find(book => book.name === bookTitle);

                book ? resolve(book.synopsis) : reject("Livro não encontrado");
            })
            .catch(err => reject(err));
    });    
}




// Toggle Login/SignUp forms
$('.toggle_form__link').on('click', () => {
    $('#login').toggleClass('hidden');
    $('#signup').toggleClass('hidden');
});

// Typewriter animation
let aText;
let destination = $("#left-top-content");

$(destination).hasClass('home__page') 
    ? aText = new Array("Você está na SAGAS Library.", "Venha nos visitar! ;)")
    : aText = new Array("Estamos felizes em ter você aqui! =)");

let iSpeed = 75; // time delay of print out
let iIndex = 0; // start printing array at this position
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines
let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents
let iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br/>';
    }
    destination.html(sContents + aText[iIndex].substring(0, iTextPos));
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 500);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();