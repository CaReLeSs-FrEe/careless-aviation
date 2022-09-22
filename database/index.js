const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI)
mongoose.connect('mongodb+srv://carelessHacker:asdfasdf@onlinedatabase.pgitsfi.mongodb.net/test')

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.log(error)
    db.close()
})

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

