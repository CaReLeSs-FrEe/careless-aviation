const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/aviation-login';

mongoose.connect(MONGODB_URI)

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.log(error)
    db.close()
})

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

