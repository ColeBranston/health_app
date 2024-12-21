const mongoose = require('mongoose')

// Creating the User Schema with Email, Username, Password, and ClientID

const userSchema = new mongoose.Schema({
    Email: String,
    Username: String,
    Password: String,
    ClientID: String
})


// Taking the schema and assigning it to a model for Mongo to recognize
const User = mongoose.model("User", userSchema)

module.exports = User