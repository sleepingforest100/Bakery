// F O R      S L I D E S H O W

var counter=1;
setInterval(function(){
	document.getElementById("radio" + counter).checked=true;
	counter++;
	if (counter>7){
		counter=1;
	}
},3500);


// F O R       C H A T B O X

function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }