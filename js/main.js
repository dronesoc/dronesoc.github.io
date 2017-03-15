console.log("test");

$(document).ready(function() {
  console.log('test');
	FEED_URL = "http://us13.campaign-archive2.com/feed?u=9676b15692435738d0ca65e67&id=60ac470493";

	$.get(FEED_URL, function (data) {
			$(data).find("item").each(function () { // or "item" or whatever suits your feed
					var el = $(this);

					console.log("------------------------");
					console.log("title      : " + el.find("title").text());
					console.log("author     : " + el.find("author").text());
					console.log("description: " + el.find("description").text());
			});
	});
});
