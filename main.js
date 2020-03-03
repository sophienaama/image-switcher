$("body").on("click", ".my-button", function (e) {
	e.preventDefault();
	// "click" = event, thing to check for = CLASS ."my-button", function to run = (e), e is the whole package of what happens in a function. Another piece of package is the target, which you set to this_button, the variable

	const this_button = e.target;
	// the target of the event

	const url = $(this_button).data("image");

	// data gives it to jquery

	console.log(url);

	$("img").attr("src", url);
});