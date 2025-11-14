import money from "./dollar.svg";
import globeBlack from "./globe-black.svg";
import arrowTop from "./arrow-top.svg";
import privacy from "./pivacy.svg";
import Link from '../Link/Link';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                <div className="footer__left">
                    <p className="footer__left-desc">© 2023 Airbnb, Inc.</p>
                    <p className="footer__left-desc">Terms</p>
                    <p className="footer__left-desc">Sitemap</p>
                    <p className="footer__left-desc">Privacy</p>
                    <p className="footer__left-desc">Your Privacy Choices</p>
                    <img src={privacy} alt="" className="footer__left-img" />
                </div>
                <div className="footer__right">
                    
                    <Link icon={globeBlack} text="English (US)"/>
                    <Link icon={money} text="USD"/>
                    <Link iconPosition="right" text="Support & resources" icon={arrowTop}/>
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer;