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
function result(res){
	console.log(res);
}

