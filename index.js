const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return thankYouCards;
}



function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}
countDown(4);