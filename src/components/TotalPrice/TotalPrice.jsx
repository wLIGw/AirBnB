import TotalBtn from '../TotalBtn/TotalBtn';
import './style.scss'


const TotalPrice = () => {
    return (
        <div className="totalprice">
        <div className="totalprice__wrapper">
            <div className="totalprice__text-wraper">
            <h2 className="totalprice__title">Display total price</h2>
            <p className="totalprice__desc">Includes all fees, before taxes</p>
            </div>
        <TotalBtn />
        </div>
        </div>
    );
}

export default TotalPrice;