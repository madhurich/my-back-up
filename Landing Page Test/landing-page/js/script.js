$(document).ready(function(){
	$('#form').submit(function(){
		var name = $('#name').val();
		var email = $('#email').val();

		var userData = 'name=' + name + '&email=' + email;
		console.log(data);
		if(name==="" || email===""){
			alert('fill all the details');
			return false;
		}
		else{

			$.ajax({
				type: 'POST',
				url: '../owner.php',
				data: userData,
				success: function(){
					alert("success");
				}
			});

			$('#name').val("");
			$('#email').val("");
			return true;
		}
	});
});
	



