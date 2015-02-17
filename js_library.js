

<html>
<head>
	<title>Ajax_jQuery</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			var _ = ( function() {
			  return {
			   // map: function() { //code here },
			   // reduce: function() { //code here},
			   // find: function() { //code here},
			   filter: function(num, callback) { 
			   		var x = [];
			   		for ( index in num ) {
			   			if( callback ) {
			      		 x.push(num[index]);
			  		 };
			   	 }
			   	// reject: function() { //code here}
			  	}
			)();
				//you just created a library with 5 methods!
				var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //should return [2, 4, 6] after you finish implementing the code above
		};
	</script>
</head>
<body>
</body>
</html>