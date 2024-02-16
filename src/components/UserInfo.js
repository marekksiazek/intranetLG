import photo from '../assets/photo.jpg';
import '../componentsCSS/userInfo.css';

function UserInfo(){
    return (
        <div className="userInfoWrapper">
            <div className="info">
                <p className="name">Marek Książek</p>
                <p className="maNumber">MA012658</p>
                <p className="ip">IP: 172.26.56.35</p>
                <p className="department">IT Team</p>
            </div>
            <img src={photo} alt="userPhoto" className="userInfoPhoto"/>
        </div>
    );
}

export default UserInfo;