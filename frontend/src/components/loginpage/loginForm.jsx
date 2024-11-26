import { useState } from "react";
import {Link} from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState("") //creating state variables and change functions and assigning the intial values as blank ("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [clientID, setClientID] = useState("")
    
    const send = async() => {
        await fetch("http://localhost:4000/account/signin", {method:"POST", headers:{
			'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "email": email,
            "username": username,
            "password": password,
            "clientID": clientID
        })}).then(res => {
            return res.json()
        }).catch(error => {
            console.log("An ERROR has ocurred")
        })
    }
    return(
        <div className="formContainer">
            <h1 className="bodyText">Sign In</h1>
            <form className="form" onSubmit={send}>
                <p className="bodyText innerForm">Email: <input className="inputField" type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">Username: <input className="inputField" type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">Password: <input className="inputField" type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">ClientID: <input className="inputField" type="text" value={clientID} onChange={(e) => {
                    setClientID(e.target.value)
                }}/></p>

                <button className="submitButton" type="submit">Submit</button>
            </form>
            <div>
                <p className="bodyText outerForm">Or <span style={{opacity:"0"}}>.</span> <Link to="/SubmitPage"> Sign Up</Link></p>
            </div>
        </div>

    );
}

export default LoginForm;