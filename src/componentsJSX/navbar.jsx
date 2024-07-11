import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../componentsCSS/navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [menuActive, setMenuActive] = useState(false);

  const handleSetActive = (navItem) => 
    {
      setActiveNav(navItem);
    }
  const ToggleMenu = () =>
  {
    setMenuActive(!menuActive);
  }

  return (
    <div className='Navbar-Container'>
      <h4>Gravity Gym.</h4>
      <div className="menu-button" onClick={ToggleMenu}>
        &#9776;
      </div>
      <ul className={menuActive ? 'active' : ''}>
        {['Home', 'Pricing', 'Contact Us', 'About Us'].map((item) => ( 
          <li key={item} className={activeNav === item ? 'active' : ''}>
            <Link 
              to={item.replace(' ', '')} 
              spy={true} 
              smooth={true} 
              duration={500} 
              onSetActive={() => handleSetActive(item)}
              className={activeNav === item ? 'active' : ''}
              onClick={ToggleMenu}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
