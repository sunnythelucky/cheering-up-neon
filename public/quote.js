document.querySelector(".request-quote").addEventListener("click", function () {
	fetch("/quote")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			document.querySelector(".quote").innerText = data.quote;
			document.querySelector(".by").innerText = data.by;
		})
		.catch(function (err) {
			console.error(err);
		});
});
