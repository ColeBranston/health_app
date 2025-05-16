// nav.js
import '../main.css';
import anon from '../../images/anonPFP.jpg';
import {Link} from 'react-router-dom';
import { checkLogin } from '../loginpage/loginForm';
import { useContext } from 'react';

// src\images\anonPFP.jpg

const Nav = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(checkLogin)
    return (
        <div>
            <ul className='navBar'>
                <div className='innerNav'>
                    <Link to="/"><li className='innerDiv Link'><p>Home</p></li></Link>
                    <Link to="/DailyInfo"><li className='innerDiv Link'><p>Daily Info</p></li></Link>
                    <Link to="/HealthHistory"><li className='innerDiv Link'><p>Health History</p></li></Link>
                </div>
                <div className='accountNav'>
                    <li>
                        <div className='accountInnerDIV'>
                            {isLoggedIn? //Uses ternary with global state to check if the user is logged in, then decides to allow for the user to access their account or to sign in
                            <Link to='/Account' class="Link">
                                <div className='innerDiv imgDIV'>
                                    <img src={anon} style={{ width: '40px', height: '40px' }}/>
                                </div>
                                <div className='innerDiv'><p>Account</p></div>
                            </Link>:
                            <Link to="/SubmitPage"><li className='innerDiv SignUpButton'><p>Sign Up</p></li></Link>
                            }
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Nav;
