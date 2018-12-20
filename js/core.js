// Массив из объектов
var quotes = [
	{
		quote: "Внимание к деталям, главное условие всякого планирования.",
		author: "Гараций Слизнорт"
	},
	{
		quote: "Между прошлым, настоящим и будущим всего лишь иллюзия, хотя и стойкая.",
		author: "Альберт Энштейн"
	},
	{
		quote: "Когда-нибудь люди изобретут машину времени, но у них не будет времени ей пользоваться.",
		author: "Джордж Карлин"
	},
	{
		quote: "Настоящий перфекционист - это человек который умер!",
		author: "Жак Фреско"
	},
	{
		quote: "Мы ждем света, но живем во тьме.",
		author: "Карл Саган"
	},
	{
		quote: "Смутные и бессодержательные речи и злоупотребление языком так часто принимают за тайны науки.",
		author: "Джон Лок"
	},
	{
		quote: "Мы - это детерминированные механические машины.",
		author: "Ричард Доктинз"
	},
	{
		quote: "Мы постоянно принимаем решения, правильные и не очень.",
		author: "Майкл Газзанига"
	}
];

// Объявление счетчика
var i = 0;

// Вывод первой цитаты как основной
$("#quote_text").text(quotes[0].quote);
$("#quote_author").text(" - "+ quotes[0].author);

// Выборка следующей цитаты
function getNextQuote () {
	i++;
	if (i == quotes.length) {
		i = 0;
	}
	return i;
};

// Вывод следующей цитаты
function nextQuote () {
	var x = getNextQuote();
	$("#quote_text").text(quotes[x].quote);
	$("#quote_author").text(" - "+ quotes[x].author);
}

// Функция для next_btn 
$(".next_btn").on('click', function() {
	return nextQuote();
});

// Выборка рандомой цитаты
function getrandomQuote () {
	i = Math.round(Math.random()*(quotes.length - 1) + 0);
	return i;
};

// Вывод рандомной цитаты
function randomQuote () {
	var x = getrandomQuote();
	$("#quote_text").text(quotes[x].quote);
	$("#quote_author").text(" - "+ quotes[x].author);
};

// Функция для random_btn
$(".random_btn").on('click', function() {
	return randomQuote();
});	