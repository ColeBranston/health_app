import '../main.css'

const accountinfo = () => {
    return (
        <div className='accountContainer'>
            <div className='accountInfo'>
                <p className='bodyText'>Name: null</p>
                <p className='bodyText'>Email: null</p>
                <p className='bodyText'>Password: null</p>
                <p className='bodyText'>API Details: </p>
                <span className='tabbed'><p className='bodyText'>Client ID: <span style={{paddingLeft: '32.5rem'}}>null</span></p></span>
                <span className='tabbed'><p className='bodyText'>Auth Endpoint: <span style={{paddingLeft: '30.25rem'}}>null</span></p></span>
            </div>
        </div>
    );
}

export default accountinfo