const express = require('express'); // Initialization
const cors = require('cors') //adding cors
const connectDB = require('./db/db')
connectDB()

const userFunctions = require('./db/User/User_Functions')

const app = express(); // Initialization

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware Function called every time a request occurs
app.use((req, res, next) => { 
  console.log('Time: ', Date.now());
  next(); // Required, directs the program to the next middleware function or to the rest of the code
});

// app.get('/', (req, res) => {
//   res.send('Successful response.'); // When a get request is made to this API it will send this
// });

// app.post('/account/create', async(req, res)=>{ //for adding account

//     const { email, username, password, clientID } = req.body;

//     let status = await userFunctions.createUser(email.toLowerCase(), username, password, clientID)

//     console.log(status)

//     if (status == 201) {
//       console.log("Info Has Been Saved")
//       return res.status(201).json({email, username, password, clientID})
//     } else if (status == 500) {
//       console.log("Info Wasn't Saved")
//       return res.status(500).send()
//     }
    

// })

// app.post('/account/signin', async(req, res) => {
//   const { email, username, password, clientID } = req.body;

//   const found = await userFunctions.findUser(email.toLowerCase(), username, password, clientID)
//   console.log(JSON.stringify(found))

//   savedEmail = found["Email"]
//   savedUsername = found["Username"]
//   savedPassword = found["Password"]
//   savedClientID = found["ClientID"]

//   if (found) {
//     console.log("User Exists")
//     res.status(200).send()

//   } else {
//     console.log("User Doesn't Exist")
//     res.status(501).send()
//   }
// })

// app.get('/account/queryInfo', (req, res) => {
//   console.log({savedEmail, savedUsername, savedPassword, savedClientID})
//   res.status(200).json({savedEmail, savedUsername, savedPassword, savedClientID})
// })

// Listening for when a user connects to the API
app.listen(4000, () => console.log('Example app is listening on port 4000.'));