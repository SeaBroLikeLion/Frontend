import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">바다행님</Link>
        <div className="nav-menu">
          <Link to="/boats">바다행님</Link>
          <Link to="/boats">선상낚시</Link>
          <Link to="/community">커뮤니티</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
