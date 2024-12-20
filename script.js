const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
];

const quoteDisplay = document.getElementById("quote-display");
const newQuoteBtn = document.getElementById("new-quote-btn");
const authorDisplay = document.getElementById("author-display");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const selectQuote = quotes[randomIndex];
  quoteDisplay.textContent = `${selectQuote.text}`;
  authorDisplay.textContent = `${selectQuote.author}`;
});
