import { Link, useLocation } from 'react-router-dom';
import '../../css/Nav.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Send', path: '/send' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${link.path === location.pathname ? 'nav-link-active' : 'nav-link'}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;