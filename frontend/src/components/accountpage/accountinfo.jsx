import { useEffect, useState } from 'react';
import '../main.css'

const Accountinfo = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        const getInfo = async() => {
            const response = await fetch('http://localhost:4000/account/queryInfo', {
                method:"GET",
                headers:{"Content-Type":"application/json"}
        }).catch(error => {
            console.log("An ERROR has ocurred")
        })

        const data = await response.json()
        console.log([data.savedUsername, data.savedEmail, data.savedPassword, data.savedClientID, "Null", "Null"])
        setData(data)
        }

        getInfo()
    } 
        ,[]
    )
    return (
        <div className='accountContainer'>
            <div className='accountInfo'>
                <p className='bodyText'>Name: {data.savedUsername?data.savedUsername:"null"}</p>
                <p className='bodyText'>Email: {data.savedEmail?data.savedEmail:"null"}</p>
                <p className='bodyText'>Password: {data.savedPassword?data.savedPassword:"null"}</p>
                <p className='bodyText'>API Details: </p>
                <span className='tabbed'><p className='bodyText'>Client ID: {data.savedClientID?data.savedClientID:"null"}</p></span>
                <span className='tabbed'><p className='bodyText'>Client Secret: {data.savedClientSecret?data.savedClientSecret:"null"}</p></span>
                <span className='tabbed'><p className='bodyText'>Auth Endpoint: {data.AuthEndpoint?data.AuthEndpoint:"null"} </p></span>
            </div>
        </div>
    );
}

export default Accountinfo