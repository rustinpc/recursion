// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
  	if (obj.length < 1) {
  		return "[]";
  	}
  	else if (obj.length = 1) {
  		return '[' + stringifyJSON(obj[0]) + ']';
  	}
  	else {
  		var arrayString = "";
  		for (var i=0; i<obj.length -1; i++) {
  			arrayString += stringifyJSON(obj[i]) + ',';
  		}
  		arrayString += stringifyJSON(obj[obj.length - 1]);
  	    return '[' + arrayString + ']';
  	}
  }
  else if (obj === null) {
  	return "null";
  }
  else if (typeof obj === "object") {
  	var objectString = "{";
  	for (var key in obj) {
  		if (typeof obj[key] === "function") {
  			return "{}";
  		}
  		else {
  			objectString += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
  		}
  	}
  	if (objectString !== "{") {
  	    objectString = objectString.slice(0,objectString.length - 1);
  	}
  	objectString += "}";
  	return objectString;
  }
  else {
    return String(obj);
  }
};
