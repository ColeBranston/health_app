import { useState } from "react";
import {Link} from 'react-router-dom';

const CreateForm = () => {
    const [email, setEmail] = useState("") //creating state variables and change functions and assigning the intial values as blank ("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [clientID, setClientID] = useState("")

    const [accountCreated, setAccountCreated] = useState(false)
    
    const send = async(event) => {
        event.preventDefault()
        try {
        const response = await fetch("http://localhost:4000/account/create", {method:"POST", headers:{
			'Content-Type': 'application/json'
        }, body: JSON.stringify({
            "email": email,
            "username": username,
            "password": password,
            "clientID": clientID
        })})

        if (response.ok){
            console.log("Server responsed with status code: ", response.status)
            setEmail("")
            setUsername("")
            setPassword("")
            setClientID("")
            
            setAccountCreated(true)
            
        } else {
            console.error("Error occurred with the following status: ", response.status)
        }
        }catch (error) {
            console.erorr("The following error has occurred: ", error)
        }
    }
    return(
        <div className="formContainer">
            <h1 className="bodyText">Sign Up</h1>
            <form className="form" onSubmit={send}>
                <p className="bodyText innerForm">Email: <input required className="inputField" type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">Username: <input required className="inputField" type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">Password: <input required className="inputField" type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/></p>
                <p className="bodyText innerForm">ClientID: <input required className="inputField" type="text" value={clientID} onChange={(e) => {
                    setClientID(e.target.value)
                }}/></p>

                <button className="submitButton" type="submit">Submit</button>
            </form>
            <div>
                <p className="bodyText outerForm">Or <span style={{opacity:"0"}}>.</span> <Link to="/Login"> Sign In</Link></p>
            </div>
            <div className="popUp bodyText">
                {accountCreated?
                <p>Account Has Been Created</p>
                :
                null}
            </div>
        </div>
    );
}

export default CreateForm;