document.getElementById('btn-submit').addEventListener('click', showName);
function showName(){
	var firstName = document.getElementById('firstname');
	var lastName = document.getElementById('lastname');	

	alert(firstName.value + " " +lastName.value);
}