var fs = require ('fs');
var data = "simple easy learning, just written this through the terminal. How cool doe!";

//create a writable stream
var writerStream = fs.createWriteStream ('output.txt');

//write the data to stream with encoding to be utf8
writerStream.write(data, 'utf8');

//martk the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});
 
writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log('program ended');