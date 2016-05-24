var fs = require("fs");
var http = require("http");
var _ = require("lodash");

var findAllFileNames = function( ){


_.forEach(process.argv,function(arguement){
	console.log(arguement);

});

var path;
if(process.argv.length <= 2){
	path = __dirname;
} else{
	path = process.argv[2];
}


fs.readdir(path, findAllFiles)



};


var findAllFiles = function(err, items){
	console.log(items);

	_.forEach(items,function(item){
		console.log(item);
	});
	
};
var fileNames = findAllFileNames();



var options = {
	host : 'www.omdbapi.com',
	port: 80,
	path: '/',
	 headers: {
       'Content-Type': 'text'
    }
};

console.log("came here");
http.get(options, processResponse).on("error", function(e){
	console.log("Error occured  = "+ e.message);
	fs.writeFile('dump.json', 'Hello World error', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
});

var processResponse = function(response){
fs.writeFile('dump.json', 'Hello World to you', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

	console.log("came here as well")
	response.setEncoding('utf8');
	response.on('data', function(chunk){
	console.log(chunk);
	});
};