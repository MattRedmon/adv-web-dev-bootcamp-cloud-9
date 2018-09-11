var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");


// OVER VIEW STRUCTURE OF MODELS DIRECTORY
// when we require the models directory that has two files
// it by default looks for index.js
// index.js requires the other file: todo.js
// the todo.js file exports the "Todo" model
// we created from out schema
// **********************************************
// what really is happening when we require
// our models directory is we are getting 
// our "Todo" model
// even though the code is spread across 
// two files within model directory