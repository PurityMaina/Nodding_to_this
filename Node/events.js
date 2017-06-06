//import events module
var events = require ('events');

//create an eventEmmitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as folows
var connectHandler = function connected(){
	console.log('connection succesful');

	//fire the data_received event 
	eventEmitter.emit('data_received');
}

//bind the connection event with handler
eventEmitter.on('connection', connectHandler);

//bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log('data_received succesfully');
});
//fire the connection event
eventEmitter.emit('connection');

console.log('program ended');