import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/circles.png';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'left',
  };

  const logoStyle = {
    height: '50px',
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const cartIconStyle = {
    marginLeft: 'auto',
    display: 'flex',
   
  };

  return (
    <div>
      <AppBar position="fixed" style={navbarStyle}>
        <Toolbar>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Book Store App" style={logoStyle} />
            <Typography variant="h5" style={titleStyle} color="inherit">
              <strong>RV store</strong>
            </Typography>
          </Link>

          <div style={cartIconStyle}>
            {location.pathname === '/' && (
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="black">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
