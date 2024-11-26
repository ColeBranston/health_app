// nav.js
import '../main.css';
import anon from '../../images/anonPFP.jpg';
import {Link} from 'react-router-dom';

// src\images\anonPFP.jpg

const Nav = () => {
    return (
        <div>
            <ul className='navBar'>
                <div className='innerNav'>
                <Link to="/"><li className='innerDiv'><p>Home</p></li></Link>
                <Link to="/DailyInfo"><li className='innerDiv'><p>Daily Info</p></li></Link>
                <Link to="/HealthHistory"><li className='innerDiv'><p>Health History</p></li></Link>
                <Link to="/SubmitPage"><li className='innerDiv'><p>Sign Up</p></li></Link>
                </div>
                <div className='accountNav'>
                    <li>
                        <div className='accountInnerDIV'>
                            <Link to='/Account'>
                                <div className='innerDiv imgDIV'>
                                    <img src={anon} style={{ width: '40px', height: '40px' }}/>
                                </div>
                                <div className='innerDiv'>
                                    <p>Account</p>
                                </div>
                            </Link>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Nav;
