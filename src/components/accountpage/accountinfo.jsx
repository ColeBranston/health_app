import '../main.css'

const accountinfo = () => {
    return (
        <div className='accountContainer'>
            <div className='accountInfo'>
                <p className='bodyText'>Name: null</p>
                <p className='bodyText'>Email: null</p>
                <p className='bodyText'>Password: null</p>
                <p className='bodyText'>API Details: </p>
                <span className='tabbed'><p className='bodyText'>Client ID: null</p></span>
                <span className='tabbed'><p className='bodyText'>Auth Endpoint: null </p></span>
            </div>
        </div>
    );
}

export default accountinfo