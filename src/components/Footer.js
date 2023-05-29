import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return (
        <div className="my-5" style={{ textAlign: 'center' }}>
            <p><FormattedMessage id="ContactUs" />: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </div>
    );
};

export default Footer;
