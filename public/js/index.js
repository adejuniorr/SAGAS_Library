// Search Books Section
const searchIinput = document.getElementById('search_book_input');
const results = document.getElementsByClassName('search__result')[0];

$(searchIinput).on('input', (e) => {
    const inputVal = e.target.value.toLowerCase();

    if (inputVal === '') {
        $(results).toggleClass('hidden');
    }
    
    requestApi(inputVal);
});

function requestApi(input) {
    
}

// END - Search Books Section

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