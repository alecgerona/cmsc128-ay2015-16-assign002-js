function getHammingDistance(str1, str2){
	var diff=0;

	if(str1.length != str2.length){
		console.log("Error! Strings are not equal");
	} else {
		for (var i=0; i<str1.length; i++){
			if (str1.charAt(i) != str2.charAt(i)) diff++;
		}
	}
	return diff;

}

function countSubstrPattern(strOriginal, strPattern){
	var total=0;
	var count=0;
	for (var i=0; i<strOriginal.length; i++){ //Loop traversng each possible starting point of comparison on the original string.
		for (var j=0; j<strPattern.length && i<=strOriginal.length - strPattern.length; j++){ //Loop just cycling on the pattern for comparison.
			if (strPattern.charAt(j) == strOriginal.charAt(i+j)) count++; //If the a right letter on the pattern can be seen on the original on the right order, increment count.
		}
		if (count == strPattern.length) total++; //If count matches the length of the pattern, it means that the whole pattern matched; increases the total var.
		count=0; //Resets the count to 0 for a comparison on a different starting point on the original string.
	}
	return total;
}


function isValidString(str, alphabet){
	var test=0;
	for (var i=0; i<alphabet.length; i++){
		for(var j=0; j<str.length; j++){
			if (str.charAt(j) != alphabet.charAt(i)) test++;
		}
		if (test == alphabet.length) return false;
		test = 0;
	}
	return true;
}




function result(res){
	console.log(res);
}

