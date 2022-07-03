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
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavigationList({ toggleDrawer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openUser, set__openUser] = useState(false);
  const [openLevel_1, set__openLevel_1] = useState(false);
  const [openLevel_2, set__openLevel_2] = useState(false);
  const [openLevel_3, set__openLevel_3] = useState(false);
  const [openLevel_4, set__openLevel_4] = useState(false);
  const [openLevel_5, set__openLevel_5] = useState(false);
  const [openLevel_6, set__openLevel_6] = useState(false);
  const [openLevel_7, set__openLevel_7] = useState(false);
  const [openLevel_8, set__openLevel_8] = useState(false);

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
            href='/lessons/level_1/simple-subtraction'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Вычитание' />
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
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_2(!openLevel_2)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 2' />
        {openLevel_2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_2} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/mult-close-to-100'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение близко 100' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/ref-number-10'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 10' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/ref-number-20'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 20' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/ref-number-100-above'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 100 (над)' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/ref-number-100-below'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 100 (под)' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/ref-number-100-mix'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 100 микс' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_2/checking-answers'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Проверка ответов' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_3(!openLevel_3)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 3' />
        {openLevel_3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_3} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/ref-number-20'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 20' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/ref-number-50'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 50' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/ref-number-200'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 200' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/ref-number-500'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Опорное число 500' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/decimals'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Десятичные' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_3/two-ref-numbers'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Два опорных числа' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_4(!openLevel_4)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 4' />
        {openLevel_4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_4} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_4/addition'
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
            href='/lessons/level_4/substruction'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Вычитание' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_5(!openLevel_5)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 5' />
        {openLevel_5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_5} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_5/squaring-ending-5'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='квадрат 5' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_5/squaring-close-to-50'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Близко к 50' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_5/squaring-close-to-500'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Близко к 500' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_5/squaring-ending-1'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='квадрат 1' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_5/squaring-ending-9'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='квадрат 9' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_6(!openLevel_6)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 6' />
        {openLevel_6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_6} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_6/division-by-single-number'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Деление в столбик' />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_6/division-by-multipliers'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Деление по множителям' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_7(!openLevel_7)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 7' />
        {openLevel_7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_7} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-11'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 11' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-12'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 12' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-6'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 6' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-7'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 7' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-5'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 5' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-9'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 9' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-8'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 8' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-4'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 4' />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_7/myltiply-by-3'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение на 3' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => set__openLevel_8(!openLevel_8)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень№ 8' />
        {openLevel_8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLevel_8} timeout='auto' unmountOnExit>
        <List disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            href='/lessons/level_8/fast-multiplay-two-digit-by-two-digit'
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='Умножение двузначное на двузначное' />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default NavigationList;
