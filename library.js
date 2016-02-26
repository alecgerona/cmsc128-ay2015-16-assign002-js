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
	var total = 0;
	var count=0;
	for (var i=0; i<strOriginal.length; i++){
		for (var j=0; j<strPattern.length && i<=strOriginal.length - strPattern.length; j++){
			if (strPattern.charAt(j) == strOriginal.charAt(i+j)) count++;
		}
		if (count == strPattern.length) total++;
		count=0;
	}
	return total;
}



function result(res){
	console.log(res);
}

