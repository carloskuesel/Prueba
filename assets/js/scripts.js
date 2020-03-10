function goku(){
	var name = document.getElementById("fname").value;
	if(name === ""){
		swal("Please fill out the space for name");
	}
	else{
		swal("Hello " + name);
	}
	
}

