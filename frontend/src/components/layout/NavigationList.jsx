import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavigationList({ toggleDrawer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openUser, set__openUser] = useState(false);
  const [openLevel_1, set__openLevel_1] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
    >
      <ListItemButton onClick={() => set__openUser(!openUser)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Пользователь' />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openUser} timeout='auto' unmountOnExit>
        <List disablePadding>
          {user ? (
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                toggleDrawer(false);
                onLogout();
              }}
            >
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
              <ListItemText primary='Выход' />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/register'
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <FaUser />
                </ListItemIcon>
                <ListItemText primary='Регистрация' />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                href='/login'
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <FaSignInAlt />
                </ListItemIcon>
                <ListItemText primary='Вход' />
              </ListItemButton>
            </>
          )}
        </List>
      </Collapse>
      <ListItemButton
        component={Link}
        href='/lessons'
        onClick={toggleDrawer(false)}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Уроки' />
      </ListItemButton>
      <ListItemButton onClick={() => set__openLevel_1(!openLevel_1)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 1' />
        {openLevel_1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_1} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_1/simple-addition'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Сложение' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_1/simple-division'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Деление' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_1/simple-multiplication'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_1/simple-subtraction'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Вычитание' />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default NavigationList;
