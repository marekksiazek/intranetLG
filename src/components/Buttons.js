import cloud from '../assets/cloud.png';
import ep from '../assets/ep.png';
import GMES from '../assets/GMES.png';
import support from '../assets/support.png';
import people from '../assets/people.png';
import MRBS from '../assets/MRBS.png';
import hr from '../assets/hr.png';
import invoice from '../assets/invoice.png';
import idea from '../assets/idea.png';
import sharepoint from '../assets/sharepoint.png';

import '../componentsCSS/buttons.css';

function Buttons(){

    return (
        <nav className="iconLinksWrapper">
            <a href="https://google.com" className="iconLinks"><img src={cloud} alt="cloud" className="icon" /><p>Cloud PC</p></a>
            <a href="https://google.com" className="iconLinks"><img src={ep} alt="ep" className="icon" /><p>EP</p></a>
            <a href="https://google.com" className="iconLinks"><img src={GMES} alt="gmes" className="icon" /><p>GMES</p></a>
            <a href="https://google.com" className="iconLinks"><img src={support} alt="service desk" className="icon" /><p>Service Desk</p></a>
            <a href="https://google.com" className="iconLinks"><img src={people} alt="pim" className="icon" /><p>PIM</p></a>
            <a href="https://google.com" className="iconLinks"><img src={MRBS} alt="mrbs" className="icon" /><p>MRBS</p></a>
            <a href="https://google.com" className="iconLinks"><img src={hr} alt="teta" className="icon" /><p>Teta ME</p></a>
            <a href="https://google.com" className="iconLinks"><img src={invoice} alt="ifs" className="icon" /><p>IFS</p></a>
            <a href="https://google.com" className="iconLinks"><img src={idea} alt="improvement" className="icon" /><p>Improvement</p></a>
            <a href="https://google.com" className="iconLinks"><img src={sharepoint} alt="sharepoint" className="icon" /><p>SharePoint</p></a>
        </nav>
    );
}

export default Buttons;