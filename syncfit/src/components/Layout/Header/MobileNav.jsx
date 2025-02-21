import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../css/MobileNav.css";

const links = [
  { name: 'Home', path: '/' },
  { name: 'Chat', path: '/chat' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="NavButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu className="NavIcon"/>
      </button>

      {/* 사이드바 메뉴 */}
      <div className={`SideBar ${isOpen ? "open" : ""}`}>
        <div className="SideBar-Content">
          {/* 네비게이션 */}
          <nav className="Nav-Links">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="Nav-Item"
                activeClassName="active"  // NavLink에서 제공하는 activeClassName
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
