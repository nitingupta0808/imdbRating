var fs = require("fs");


var findAllFileNames = function( ){
if(process.argv.length <= 2){
	console.log("Usage: " + __filename + " path/to/directory");
	process.exit(-1);
}

var path = process.argv[2];

fs.readdir(path, findAllFiles)



};


var findAllFiles = function(err, items){
	console.log(items);

	for(var i=0; i < items.length; i++){
		console.log(items[i]);
	}
};

findAllFileNames();