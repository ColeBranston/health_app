import Nav from '../components/homepage/nav'
import MainInfo from '../components/dailyinfo/maininfo'
import { checkLogin } from '../components/loginpage/loginForm';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const DailyInfo = () => {
    const {isLoggedIn, setIsLoggedIn } = useContext(checkLogin)
    return(
        <>
            {isLoggedIn?
                <>
                <Nav/>
                <MainInfo/>
                </>
                :
                <Navigate to="/Login"/>
            }
        </>
    );
}
export default DailyInfo;