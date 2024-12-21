import dancingMan from '../images/dancingMan.gif' 

const NotExistPage  = () => {
    return (
        <div className="NotExistDiv">
            <div className="innerContainer">
                <p><i className='errorCode'><strong>404</strong></i> Page Not Found</p>
                <img src={dancingMan} style={{ width: '200px', height: '200px' }}/>
            </div>
        </div>
    )
}

export default NotExistPage