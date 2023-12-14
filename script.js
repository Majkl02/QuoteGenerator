// Replace with the actual API endpoint
const apiUrl = "https://api.quotable.io/random";

const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const button = document.querySelector(".quote--btn");

// Fetch a random quote
button.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Access the quote and author from the response
      const genQuote = data.content;
      const genQuoteAuthor = data.author;

      quoteText.textContent = genQuote;
      quoteAuthor.textContent = `-${genQuoteAuthor}`;
    })
    .catch((error) => console.error("Error fetching quote:", error));
});
