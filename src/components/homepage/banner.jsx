import "../main.css"

const banner = ({account_name}) => {
    return (
        <div className="bannerContainer">
            <div className="banner">
                <p> Hello {account_name?account_name:"null"}, check your stats above </p>
            </div>
        </div>
    )
} 

export default banner;