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

app.get('/:num1', (req, res) => {
  const { num1 } = req.params;
  const numberVal = Number(num1);
  res.json({ numberVal });
});

app.post('/submit', (req, res) => {
  const { num1, num2 } = req.body;
  const value = num1 * num2;

  if (isNaN(value)) {
    console.error("The result is NaN");
  } else {
    console.log("The result is:", value);
  }
  
  res.json({ num1, num2, value });
});

app.post('/submit/account', (req, res)=>{ //for adding account
    const { email, username, password, clientID } = req.body;
    console.log({email, username, password, clientID})
    res.json({email, username, password, clientID})

})

// Listening for when a user connects to the API
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
