var answers = ['Sure', 'Whoa, chill out!', 'Calm down, I know what im doing!', 'Fine, Be that way!', "Whatever"];

var number=0
var output = document.querySelector('#result');
var inputBox=document.querySelector('#ans');
var chatBox = document.querySelector('#chatbox');

function showResponse(){
	var input = inputBox.value;
	if(inputBox.value===""){
		alert("please type a message")
	}
	else if(inputBox.value =="?"){
		output.innerHTML=answers[0]
		inputBox.value=""
	
	}else if(inputBox.value == value.toUpperCase()){
		output.innerHTML='<p>Whoa, chill out!</p>'
		inputBox.value=""
	
	}else if(inputBox.value == ){
		output.innerHTML='<p>Calm down, I know what im doing!</p>'
		inputBox.value=""
	
	}else if(inputBox.value == ){
		output.innerHTML='<p>Fine, Be that way!</p>'
		inputBox.value=""
	
	}else{
		output.innerHTML='<p>Whatever</p>'
		inputBox.value=""
	}
}

 function submitMessage(){
 	showResponse();
 }
 