import { UserContext } from "../loginpage/loginForm";
import "../main.css"
import { useContext, useEffect, useState } from 'react';

const Banner = () => {
    // const [res, setResponse] = useState("User")
    // useEffect(() => {
    //     const getInfo = async() => {
    //         const response = await fetch("http://localhost:4000/account/queryInfo", {
    //             method:"GET",
    //             headers: {"Content-Type": "application/json"}
    //     }
    //     ).catch(error => {
    //     console.log("An ERROR has ocurred")
    // })
    
//     let data
//     if (response === undefined){
//         data = {savedUsername : undefined}
//         console.log(data.savedUsername)
//     } else {
//         data = await response.json()
//     }

//     setResponse(data)
//     }
    
//     getInfo()
// }, [])
    const {username, setUsername} = useContext(UserContext)
    console.log ("Username: "+username)
    return (
        <div className="bannerContainer">
            <div className="banner">
                <p> Hello {username?username:"User"}, check your stats above </p>
            </div>
        </div>
    )
} 

export default Banner;
