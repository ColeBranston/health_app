import { useState } from "react";

function Form(){
    const [email, setEmail] = useState("") //creating state variables and change functions and assigning the intial values as blank ("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [clientID, setClientID] = useState("")
    
    const send = async() => {
        await fetch("http://localhost:3000/submit/account", {method:"POST", headers:{
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
            <form className="form">
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

                <button className="submitButton" onClick={send}>Submit</button>
            </form>
        </div>

    );
}

export default Form;