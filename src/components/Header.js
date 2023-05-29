import Banner from './../assets/images/cafe-banner.png'
import { FormattedMessage } from 'react-intl';

const Header = () => {
    return (
        <div className="container mt-3">
            <h2 className='main-title'><FormattedMessage id="TheMagicalScent" /></h2>
            <hr />
            <img className='img-fluid' src={Banner} alt="Banner" />
            <hr />
        </div>
    );
};

export default Header;
