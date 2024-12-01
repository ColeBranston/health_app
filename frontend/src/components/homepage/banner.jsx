import { UserContext } from "../loginpage/loginForm";
import "../main.css"
import { useContext, useEffect, useState } from 'react';
import { data } from "react-router-dom";
import { checkLogin } from "../loginpage/loginForm";

const Banner = () => {
    // const [res, setResponse] = useState("User")
    const {isLoggedIn, setIsLoggedIn } = useContext(checkLogin)
    useEffect(() => {
        if (isLoggedIn) {
            try {
                const getInfo = async() => {
                    const response = await fetch("http://localhost:4000/account/queryInfo", {
                        method:"GET",
                        headers: {"Content-Type": "application/json"}
                    }
                    ).catch(error => {
                        console.log("An ERROR has ocurred")
                    })
            
                    if (response.ok){
                        const data = await response.json()
                        setUsername(data?.savedUsername || "")

                    }
                }
            getInfo()
            }
            catch (error) {
                console.error("An error has occurred: ", error)
            }
        }   
}, [])
    // const {username, setUsername} = useContext(UserContext)
    const [username, setUsername] = useState("")
    // console.log ("Username: "+username)
    return (
        <div className="bannerContainer">
            <div className="banner">
                <p> Hello {username?username:"User"}, check your stats above </p>
            </div>
        </div>
    )
} 

export default Banner;
