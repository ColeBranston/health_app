import "../main.css"
import { useEffect, useState } from 'react';

const Banner = () => {
    const [response, setResponse] = useState("User")
    useEffect(() => {
        const getInfo = async() => {
            const response = await fetch("http://localhost:4000/account/queryInfo", {
                method:"GET",
                headers: {"Content-Type": "application/json"}
        }
        ).catch(error => {
        console.log("An ERROR has ocurred")
    })
    const data = await response.json()
    setResponse(data)
    }
    
    getInfo()
}, [])

    return (
        <div className="bannerContainer">
            <div className="banner">
                <p> Hello {response.savedUsername?response.savedUsername:"User"}, check your stats above </p>
            </div>
        </div>
    )
} 

export default Banner;
