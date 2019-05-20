<script>
var start = 0;
var working = false;
$(document).ready(function() {
  $.ajax({
	type: "GET",
	url: "data.php?start="+start,
	processData: false,
	contentType: "application/json",
	data: '',
	success: function(r) {
		r = JSON.parse(r)
		for (var i = 0; i < r.length; i++) {
			$('body').append("<div><h1>"+r[i].videoName+"</h1></div>");
		}
		start += 5;
	},
	error: function(r) {
		console.log("Something went wrong");
	}
  });
});

$(window).scroll(function() {
  if($(this).scrollTop() + 1 >= $('body').height() - $(window).height()) {
	if(working == false) {
		working = true;
		$.ajax({
			type: "GET",
			url: "data.php?start="+start,
			processData: false,
			contentType: "application/json",
			data: '',	
			success: function(r) {
				r = JSON.parse(r)
				for (var i = 0; i < r.length; i++) {
					$('body').append("<div><h1>"+r[i].videoName+"</h1></div>");
				}
				start += 5;
				setTimeout(function() {
					working = false; 
				}, 4000)		
			},
		error: function(r) {
			console.log("Something went wrong");
		}
	  });
	}
  }

});
</script>
