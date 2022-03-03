import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function LessonsList() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Grid container sx={{ flexGrow: 1 }} direction='column'>
      <Grid item>
        <Typography variant='h1' align='center'>
          Добро пожаловать {user ? user.name : ''}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant='h6' align='center'>
          Уровень № 1
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href='/lessons/level_1/simple-addition'
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='простое сложение' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href='/lessons/level_1/simple-division'
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary='простое деление' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href='/lessons/level_1/simple-multiplication'
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='простое умножение' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href='/lessons/level_1/simple-subtraction'
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary='простое вычитание' />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default LessonsList;
