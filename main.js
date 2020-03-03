$("body").on("click", "#man", function (e) {
	e.preventDefault();
	// "click" = event, thing to check for = "man", function to run = (e)

	const url = $("#man").data("image");
	console.log(url);

	$("img").attr("src", url);
});

$("body").on("click", "#baby", function (e) {
	e.preventDefault();
	// "click" = event, thing to check for = "man", function to run = (e)

	const url = $("#baby").data("image");
	console.log(url);

	$("img").attr("src", url);
});