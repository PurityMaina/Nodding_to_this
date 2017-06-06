dns = require('dns')

console.log("resolving google.com");

dns.resolve('google.com', function(err, address){
	if (err) throw err
	console.log(address);
});
