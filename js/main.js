
var myRequest = new XMLHttpRequest();

myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

myRequest.onload = function(){

	console.log(myRequest.resposeText);

}

myRequest.send();