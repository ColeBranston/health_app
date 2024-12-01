import { useEffect, useState } from "react";
import "../main.css";

const Accountinfo = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clientID, setClientID] = useState("");

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch("http://localhost:4000/account/queryInfo", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                // Only process if the response is OK
                if (response.ok) {
                    const data = await response.json();
                    
                    // Safe check to ensure data is not null or undefined
                    setUsername(data?.savedUsername || "");
                    setEmail(data?.savedEmail || "");
                    setPassword(data?.savedPassword || "");
                    setClientID(data?.savedClientID || "");
                } else {
                    console.error("Failed to fetch account info: ", response.status);
                }

            } catch (error) {
                console.error("An error has occurred: ", error);
            }
        };

        getInfo();
    }, []); // Empty dependency array for `useEffect`

    return (
        <div className="accountContainer">
            <div className="accountInfo">
                <p className="bodyText">Name: {username || "null"}</p>
                <p className="bodyText">Email: {email || "null"}</p>
                <p className="bodyText">Password: {password || "null"}</p>
                <p className="bodyText">API Details:</p>
                <span className="tabbed">
                    <p className="bodyText">Client ID: {clientID || "null"}</p>
                </span>
                <span className="tabbed">
                    <p className="bodyText">Client Secret: {"null"}</p>
                </span>
                <span className="tabbed">
                    <p className="bodyText">Auth Endpoint: {"null"}</p>
                </span>
            </div>
        </div>
    );
};

export default Accountinfo;
