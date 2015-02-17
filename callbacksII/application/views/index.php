<html>
<head>
	<title>Ajax_jQuery</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			

			function send_something_via_ajax(callback){
				$.ajax({
					url: '/users/random', 
					type: 'GET',
					dataType: 'json',
					data: $(this).serialize()
				})
				.done(function(output){
					callback(output);
				}, 'json');
				return null;
			}

			function first(response){
				console.log('Output is: ', response);
			}

			function second(response){
				$('#messages').html(response.name + " " + response.age);
			}

			function third(response){
				// $('#messages').fadeOut(slow, linear, (response.name + " " + response.age));
			
				$('#messages').fadeOut(	function (){
					$(this).append("<div>" + response.name + "</div>").fadeIn();
				});
			}

			// send_something_via_ajax(first);
			send_something_via_ajax(first);
		});





			// 	function send_something_via_ajax(){
			// 	$.ajax({
			// 		url: '/users/random', 
			// 		type: 'Get',
			// 		dataType: 'json'
			// 	})
			// 	.done(function(ouput) {
			// 		console.log(output);

			// 	})
			// 	return null;
			// });

	


	// $(document).ready(function(){
	// 	$('#mainForm').submit(function(){
	// 		$.post(
	// 			$('#mainForm').attr('action'),
	// 			$('#mainForm').serialize(),
	// 			function(output){
	// 				$('#messages').append("name: "+output.name+" age: "+output.age+"<br/>");
	// 			}, "json"
	// 			);
	// 		return false;
	// 	});
	// });
	</script>
</head>
<body>
	<form id='mainForm' action='/users/random' method='post'>
		<button type='submit'>Via Ajax, grab information of a random person</button>
	</form>
	<div id='messages'>
		Stuff
	</div>
</body>
</html>