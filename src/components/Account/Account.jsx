import navIcon from './nav.svg';
import './style.scss';

const Account = () => {
    return ( 
        <button className="account">
            <div className="account__nav-icon">
                <img src={navIcon} alt="" />
            </div>
            <div className="account__avatar-icon">
                <img src="./img/icons/user-avatar.svg" alt="User avatar" />
            </div>
        </button>
    );
}

export default Account;