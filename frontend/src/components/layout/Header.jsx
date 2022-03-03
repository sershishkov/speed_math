import React, { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NavigationList from './NavigationList';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openDrawer, set__openDrawer] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    set__openDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <NavigationList toggleDrawer={toggleDrawer} />
          </SwipeableDrawer>
          <Link href='/' sx={{ flexGrow: 1, color: '#fff' }}>
            SpeedMath
          </Link>

          <List sx={{ display: 'flex' }}>
            {user ? (
              <ListItemButton onClick={onLogout} color='inherit'>
                <ListItemIcon>
                  <FaSignOutAlt />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItemButton>
            ) : (
              <>
                <ListItemButton component={Link} href='/login' rel='noreferrer'>
                  <ListItemIcon>
                    <FaSignInAlt />
                  </ListItemIcon>
                  <ListItemText primary='Login' />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  href='/register'
                  rel='noreferrer'
                >
                  <ListItemIcon>
                    <FaUser />
                  </ListItemIcon>
                  <ListItemText primary='Register' />
                </ListItemButton>
              </>
            )}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
