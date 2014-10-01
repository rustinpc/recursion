// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  //document.body | element.childNodes | element.classList
  var result = [];

  var body = document.body;

  function getElementByClass(element, className) {
  	if (element.classList !== undefined && element.classList.contains(className)) {
  		result.push(element);
  	}
  	if (element.classList !== undefined && element.childNodes.length > 0) {
  		for (var i=0; i<element.childNodes.length; i++) {
  			getElementByClass(element.childNodes[i],className);
  		}
  	}
  }
  getElementByClass(body,className);

  return result;
};
