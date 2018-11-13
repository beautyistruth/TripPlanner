module.exports = {
    mode: 'development', //Chosen mode tells webpack to use its built-in optimizations accordingly
    entry: "./src/index.js", //starting point for program
    output: {
        path: __dirname + '/public', //absolute path for directory where we want output to be placed
        filename: "bundle.js" //name of file that will contain our output (can be named anything)
    }
};
