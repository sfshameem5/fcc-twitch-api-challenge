// Api URL

var link = "https://wind-bow.gomix.me/twitch-api";

// first_streamer data.
var first_streamer = $(".first_streamer .streamer"),
	first_streamer_image = $(".first_streamer .image"),
	first_streamer_status = $(".first_streamer .status");

// get first_streamer user data. 
$.ajax({
	url: link + "/users/" + first_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		// change image url for first streamer.
		$(first_streamer_image).attr("src", data.logo);
	}
});
// get first_streamer stream data. 
$.ajax({
	url: link + "/streams/" + first_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		if (data.stream !== null) {
			$(first_streamer_status).text(data.stream.game);
			$(first_streamer).parent().addClass("online").removeClass("offline");
		}else {
			$(first_streamer_status).text("Offline");
			$(first_streamer).parent().addClass("offline").removeClass("online");
		}
	}
});
// get first_streamer channel data. 
$.ajax({
	url: link + "/channels/" + first_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		// console.log(data.status);
		if (first_streamer_status.text() !== "Offline") {
			$(first_streamer_status).append(" " + data.status);
		}
	}
});

// second_streamer data.
var second_streamer = $(".second_streamer .streamer");
var second_streamer_image = $(".second_streamer .image");
var second_streamer_status = $(".second_streamer .status");

// get second_streamer user data 
$.ajax({
	url: link + "/users/" + second_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		// change image url for first streamer.
		$(second_streamer_image).attr("src", data.logo);
	}
});

// get second_streamer stream data 
$.ajax({
	url: link + "/streams/" + second_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		if (data.stream !== null) {
			$(second_streamer_status).text(data.stream.game);
			$(second_streamer).parent().addClass("online").removeClass("offline");
		}else {
			$(second_streamer_status).text("Offline");
			$(second_streamer).parent().addClass("offline").removeClass("online");
		}
	}
});

// get second_streamer channel data 
$.ajax({
	url: link + "/channels/" + second_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		if (second_streamer_status.text() !== "Offline") {
			$(second_streamer_status).append(" " + data.status);
		}
	}
});

// third_streamer data.
var third_streamer = $(".third_streamer .streamer");
var third_streamer_image = $(".third_streamer .image");
var third_streamer_status = $(".third_streamer .status");

// get third_streamer user data
$.ajax({
	url: link + "/users/" + third_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		// change image url for first streamer.
		$(third_streamer_image).attr("src", data.logo);
	}
});
// get third_streamer stream data
$.ajax({
	url: link + "/streams/" + third_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		if (data.stream !== null) {
			$(third_streamer_status).text(data.stream.game);
			$(third_streamer).parent().addClass("online").removeClass("offline");
		}else {
			$(third_streamer_status).text("Offline");
			$(third_streamer).parent().addClass("offline").removeClass("online");
		}
	}
});
// get third_streamer channel data
$.ajax({
	url: link + "/channels/" + third_streamer.text(),
	dataType: "jsonp",
	success: function(data) {
		// console.log(data.status);
		if ( $(third_streamer_status).text() !== "Offline") {
			$(third_streamer_status).append(" " + data.status);
		}
	}
});


// add event listeners for buttons.

$('.all').on('click', () => {
	$('.first_streamer, .second_streamer, .third_streamer').show();
});

$('.on').on('click', () => {
	$('.online').show();
	$('.offline').hide();
});

$('.off').on('click', () => {
	$('.offline').show();
	$('.online').hide();
});


// open new tabs on click. 
$('.first_streamer').on('click', () => {
	window.open('https://www.twitch.tv/esl_sc2', "_blank");
});

$('.second_streamer').on('click', () => {
	window.open('https://www.twitch.tv/ogamingsc2', "_blank");
});