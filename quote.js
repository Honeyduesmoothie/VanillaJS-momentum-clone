const quotes = [
    {quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"},
    {quote: "So many books, so little time.",
    author: "Frank Zappa"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"},
    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"},
    {quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"},
    {quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"},
    {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"},
    {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr."},
    {quote: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"},
]

const bgImgs = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg",
]

const quote = document.querySelector(".quote")
const author = document.querySelector(".author")

let ranNum = Math.floor(Math.random()*quotes.length)
quote.textContent = quotes[ranNum].quote;
author.textContent = quotes[ranNum].author; 

const img = document.createElement("img")
img.src = `images/${bgImgs[Math.floor(Math.random()*bgImgs.length)]}`
document.body.appendChild(img)