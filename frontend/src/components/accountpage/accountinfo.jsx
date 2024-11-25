import '../main.css'

const accountinfo = ({user_name, user_email, user_password, user_clientid, user_clientsecret, auth_endpoint}) => {
    return (
        <div className='accountContainer'>
            <div className='accountInfo'>
                <p className='bodyText'>Name: {user_name?user_name:"null"}</p>
                <p className='bodyText'>Email: {user_email?user_email:"null"}</p>
                <p className='bodyText'>Password: {user_password?user_password:"null"}</p>
                <p className='bodyText'>API Details: </p>
                <span className='tabbed'><p className='bodyText'>Client ID: {user_clientid?user_clientid:"null"}</p></span>
                <span className='tabbed'><p className='bodyText'>Client Secret: {user_clientsecret?user_clientsecret:"null"}</p></span>
                <span className='tabbed'><p className='bodyText'>Auth Endpoint: {auth_endpoint?auth_endpoint:"null"} </p></span>
            </div>
        </div>
    );
}

export default accountinfo