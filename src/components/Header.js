import Banner from './../assets/images/cafe-banner.png'

const Header = () => {
    return (
        <div className="container mt-3">
            <h2 className='main-title'>El aroma mágico</h2>
            <hr />
            <img className='img-fluid' src={Banner} alt="Banner" />
            <hr />
        </div>
    );
};

export default Header;
