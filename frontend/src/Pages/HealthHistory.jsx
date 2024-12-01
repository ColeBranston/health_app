import Nav from '../components/homepage/nav'
import HistoryInfo from '../components/healthHistory/historyinfo'
import { checkLogin } from '../components/loginpage/loginForm';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const HealthHistory = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(checkLogin)
    return (
        <>
            {isLoggedIn?
            <>
                <Nav/>
                <HistoryInfo/>
            </>
            :
            <Navigate to="/Login"/>
            }
        </>
    );
}

export default HealthHistory;