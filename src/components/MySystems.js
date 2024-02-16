import hr from '../assets/hr.png';
import ep from '../assets/ep.png';
import GMES from '../assets/GMES.png';
import support from '../assets/support.png';
import idea from '../assets/idea.png';
import invoice from '../assets/invoice.png';
import '../componentsCSS/mySystems.css';

function MySystems(){
    return(
        <div className="mySystemWrapper">
            <p className="titleInMySystem">My Systems:</p>
            <div className="iconSystemWrapper">
                <div className="system">
                    <a href="https://google.com"><img src={support} alt="service desk" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
                <div className="system">
                    <a href="https://google.com"><img src={invoice} alt="ifs" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
                <div className="system">
                    <a href="https://google.com"><img src={GMES} alt="gmes" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
                <div className="system">
                    <a href="https://google.com"><img src={hr} alt="teta" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
                <div className="system">
                    <a href="https://google.com"><img src={ep} alt="ep" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
                <div className="system">
                    <a href="https://google.com"><img src={idea} alt="idea" className="systemIcon"/></a>
                    <p className="systemInfo">5</p>
                </div>
            </div>
        </div>
    );
}

export default MySystems;