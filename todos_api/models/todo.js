var mongoose = require("mongoose");


// below defines/creates our schema
 todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can not be blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

// the next step is to compile the schema to a model
// code below compiles our schema
// we pass in name of the model "Todo"
// then pass in the schema we created above "todoSchema"
var Todo = mongoose.model("Todo", todoSchema);



// here we are exporting the "Todo" model we just created above
// from out schema
// when we require this file "todos.js" (the one we are working on)
// what we are actually getting is just the "Todo" model
// which we are exporting with the code below
module.exports = Todo;

// our export will get used in the 
// models/index.js file




// name


// completed


// created date