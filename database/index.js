const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.log(error)
    db.close()
})

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

