import './styles.scss';
import logo from '../../assets/myfavicon.png';

const Header = (props) => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
