$(document).ready(function () {
	$('#btn').click(function (){
		var myName = $('#name-input');
		var myClass = $('#class-input').val();
		var myGender = $('input[name=gender]:checked');
		var agreeTerms = $('#cb-terms');
		if(myName.val().trim() == ""){
			alert('Name required');
			myName.focus();
		}
		else if (myClass == '') alert('Class required');
		else if (myGender.length == 0) alert('Gender required');
		else if (!agreeTerms.prop('checked'))
			alert('You must agree to the terms and conditions');
		else{
			$('#result-name').text(myName.val().trim());
			$('#result-class').text(myClass);
			$('#result-gender').text(myGender.val());	
		}
	});
});