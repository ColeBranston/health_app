const express = require('express'); // Initialization
const cors = require('cors') //adding cors

const app = express(); // Initialization

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware Function called every time a request occurs
app.use((req, res, next) => { 
  console.log('Time: ', Date.now());
  next(); // Required, directs the program to the next middleware function or to the rest of the code
});

app.get('/', (req, res) => {
  res.send('Successful response.'); // When a get request is made to this API it will send this
});

// app.get('/:num1', (req, res) => {
//   const { num1 } = req.params;
//   const numberVal = Number(num1);
//   res.json({ numberVal });
// });

// app.post('/CreateAccount', (req, res) => {
//   const { num1, num2 } = req.body;
//   const value = num1 * num2;

//   if (isNaN(value)) {
//     console.error("The result is NaN");
//   } else {
//     console.log("The result is:", value);
//   }
  
//   res.json({ num1, num2, value });
// });

let savedEmail;
let savedUsername;
let savedPassword;
let savedClientID;

app.post('/account/create', (req, res)=>{ //for adding account

    const { email, username, password, clientID } = req.body;
    console.log({email, username, password, clientID})

    savedEmail = email
    savedUsername = username
    savedPassword = password
    savedClientID = clientID

    console.log("Info Has Been Saved")

    return res.status(201).json({email, username, password, clientID})

})

app.post('/account/signin', (req, res) => {
  const { email, username, password, clientID } = req.body;
  if (email === savedEmail && username === savedUsername && password === savedPassword && clientID === savedClientID) {
    console.log("User Exists")
    res.status(200).send()
  } else {
    console.log("User Doesn't Exist")
    res.status(501).send()
  }
})

app.get('/account/queryInfo', (req, res) => {
  console.log({savedEmail, savedUsername, savedPassword, savedClientID})
  res.status(200).json({savedEmail, savedUsername, savedPassword, savedClientID})
})

// Listening for when a user connects to the API
app.listen(4000, () => console.log('Example app is listening on port 4000.'));