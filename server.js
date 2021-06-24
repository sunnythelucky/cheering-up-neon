const express = require("express");
const path = require("path");

const empoweringQuotes = [
	{ quote: "The biggest adventure you can ever take is to live the life of your dreams.", by: "Oprah Winfrey" },
	{ quote: "Beauty is everywhere. You only have to look to see it.", by: "Bob Ross" },
	{ quote: "You can’t stop the waves, but you can learn to swim.", by: "Jon Kabat Zinn" },
	{ quote: "Life is the dancer and you are the dance.", by: "Eckhart Tolle" },
	{ quote: "Every day is a new day.", by: "Carrie Underwood" },
	{ quote: "The point is not to pay back kindness but to pass it on.", by: "Julia Alvarez" },
	{ quote: "No medicine cures what happiness cannot.", by: "Gabriel García Márquez" },
	{ quote: "If you have only one smile in you give it to the people you love.", by: "Maya Angelou" },
	{
		quote: "The most important thing is to enjoy your life — to be happy. It's all that matters.",
		by: "Audrey Hepburn",
	},
	{ quote: "The purpose of our lives is to be happy.", by: "Dalai Lama" },
];

function getRandomQuotes() {
	const randomIndex = Math.floor(Math.random() * empoweringQuotes.length);
	return empoweringQuotes[randomIndex];
}

const app = express();

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quote", function (req, res) {
	res
		.json({
			quote: getRandomQuotes().quote,
			by: getRandomQuotes().by,
		})
		.end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
