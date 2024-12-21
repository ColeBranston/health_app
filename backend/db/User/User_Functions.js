const User = require("./User_Model")

const createUser = async(email, username, password, clientid) => {
    const checkUser = await User.findOne({ Email: email.toLowerCase() })
    console.log(checkUser)
    
    var status

    if (!checkUser){
        const newUser = new User({
            Email: email,
            Username: username,
            Password: password,
            ClientID: clientid
        })

        await newUser.save()

        console.log("User created, Setting Status To: ", 201)
        status = 201
    } else {
        console.log("User Already Exists, Setting Status To: ", 500)
        status = 500
    }

    return status
}

const findUser = async(email) => {
    try {
        const foundUser = await User.findOne({ Email: email.toLowerCase() }) // uses the model's built in .findOne() method that will find a user by their email
        return foundUser
    } catch (error) {
        console.log(error) 
    }
}

const deleteUser = async(email) => {
    try{
        const deletedUser = User.findOneAndDelete({ email })
        console.log("User Deleted: ", deletedUser)
    } catch (error){
        console.log("Error: ", error)
    }
}

const updateUser = async(email, username, password, clientID) => {
    try{
        const updatedUser = User.findOneAndUpdate( //uses the built in findOneAndUpdate() method from the User model
            {email}, //parsing variable which is used to search for the database entry
            {Username: username}, // => Notice how each attribute of the model is inside its own set of curly brackets, {}
            {Password: password},
            {ClientID: clientid},
            { new:true } //Basically tells Mongo that the previous information for the model is new and that the database entry should be updated
        )

        console.log("User has been updated: ", updatedUser)
    } catch (error) {
        console.log("Error: ", error)
    }
}

module.exports = {createUser, findUser, deleteUser, updateUser}