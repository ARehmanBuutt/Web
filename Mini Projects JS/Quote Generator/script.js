// const quoteDisplay = document.getElementById("quote");
// const button = document.querySelector(".btn1");

// button.addEventListener("onclick", getQuote);

// function getQuote() {
//   fetch('https://api.quotable.io/quotes/random')
//     .then(response => response.json())
//     .then(data => {
//       quoteDisplay.innerText = `${data.content} - ${data.author}`;
//     })
//     .catch(error => console.error(error));
// }


function getQuote() {
    fetch('https://api.example.com/quote')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            quoteDisplay.innerText = randomQuote.text;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}