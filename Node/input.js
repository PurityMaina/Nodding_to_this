var fs = require ("fs");

fs.readFile('input.txt', function(err,data){
	if (err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log('Program Ended');

//fs.readFile() is a async function whose purpose is to read a file