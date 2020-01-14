function printOdd(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 !== 0) {
      document.getElementById('abc').innerHTML += ('<li>' +String(i)+ '</li>')
      
    }
  }
}

function printEven(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 === 0) {
      document.getElementById('xyz').innerHTML
     += ('<li>' +String(i)+ '</li>')
      
    }
  }
}

var li = document.createElement("li");
var node = document.createTextNode(text);
li.appendChild(node);
document.getElementById("list").appendChild(li);