import { Link, useLocation } from 'react-router-dom';
import '../../css/Nav.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Emotion', path: '/emotion' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
];

const Nav = () => {
  const location = useLocation();

  const darkPages = ['/', '/emotion'];
  const isDark = darkPages.includes(location.pathname);

  return (
    <nav className="nav">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`nav-link nav-link-${isDark ? 'dark' : 'light'} ${link.path === location.pathname ? 'nav-link-active' : 'nav-link'}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;