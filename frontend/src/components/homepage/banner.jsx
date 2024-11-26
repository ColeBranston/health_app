import "../main.css"
import {username} from "../../components/submitpage/form"

const Banner = ({account_name}) => {
    return (
        <div className="bannerContainer">
            <div className="banner">
                <p> Hello {username?username:"null"}, check your stats above </p>
            </div>
        </div>
    )
} 

export default Banner;
