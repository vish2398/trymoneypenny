var $ = require('jquery');

$('form').submit(function(event) {
	var userEmail = $('#mce-EMAIL').val();
	console.log(userEmail);
	event.preventDefault();
	$.ajax({
		url: '/subscribe',
		type: 'POST',
		data: {
			email: userEmail
		},
		success: function(response) {
  			
		},
		complete: function(response) {
			$("#mce-EMAIL").val('');
			$('#subscribeMsgLbl').show();

		}
	});
});
