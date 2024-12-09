import React from 'react';
import { Menu, MenuItem, Segment } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/MenuBar.css';
import { useAuth } from '../context/AuthContext';

const MenuExampleInvertedSegment = () => {
  const { isSignedIn, logout, userType } = useAuth();
  const [activeItem, setActiveItem] = React.useState('home');
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name); 
  };

  const navigateToProfile = () => {
    setActiveItem('profile'); 
    if (userType === 'Admin') {
      navigate('/adminHome');
    } else {
      navigate('/profile');
    }
  };

  return (
    <Segment inverted>
      <Menu inverted secondary className="custom-menu">
        {/* Logo Section */}
        <MenuItem className="logo-item">
          <img
            src="/images/CarProfile.png"
            alt="RoadReady Logo"
            className="logo"
          />
          <span className="company-name">RoadReady</span>
        </MenuItem>

        {/* Menu Items */}
        <Menu.Menu position="right">
          <MenuItem
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <MenuItem
            name="fleets"
            active={activeItem === 'fleets'}
            onClick={handleItemClick}
            as={Link}
            to="/fleets"
          />
          <MenuItem
            name="about"
            active={activeItem === 'about'}
            onClick={handleItemClick}
            as={Link}
            to="/about"
          />
          <MenuItem
            name="contact"
            active={activeItem === 'contact'}
            onClick={handleItemClick}
            as={Link}
            to="/contact"
          />
          {!isSignedIn ? (
            <>
              <MenuItem
                name="login"
                active={activeItem === 'login'}
                onClick={handleItemClick}
                as={Link}
                to="/login"
                className="secondary-button"
              />
              <MenuItem
                name="register"
                active={activeItem === 'register'}
                onClick={handleItemClick}
                as={Link}
                to="/register"
                className="primary-button"
              />
            </>
          ) : (
            <>
              <MenuItem
                name="profile"
                active={activeItem === 'profile'}
                onClick={navigateToProfile} 
              />
              <MenuItem
                name="logout"
                active={activeItem === 'logout'}
                onClick={() => {
                  logout();
                  setActiveItem('logout'); // Optional: Update activeItem to logout
                }}
                className="secondary-button"
              />
            </>
          )}
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default MenuExampleInvertedSegment;