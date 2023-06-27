import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import { useState } from 'react';
import ADoctor from './ADoctor';
import ADrpartment from './ADrpartment'
import AMedicine from './AMedicine';
import AAppoiment from './AAppoiment';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Dialog } from '@mui/material';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function Panel() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={3} sx={{ backgroundColor: 'red' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" >
              Admin panle
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>

            <ListItem disablePadding sx={{ display: 'block'}} onClick={() => setMenudata("Doctor")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                 
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginLeft:2.3,
                    marginRight:2.3,
                  }}
                >
               < HealthAndSafetyRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={'Doctor'} />
              </ListItemButton>
            </ListItem>

          </List>
          <List>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Department")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginLeft:2.3,
                    marginRight:2.3,
                  }}
                >
                  < Diversity1Icon />
                </ListItemIcon>
                <ListItemText primary={'Department'} />
              </ListItemButton>
            </ListItem>

          </List>
          <List>

     
         <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Appoinment")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginLeft:2.3,
                    marginRight:2.3,
                  }}
                >
                  <EditCalendarOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Appoinment'} />
              </ListItemButton>
            </ListItem>

          </List>
          <List>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Medicine")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    marginLeft:2.3,
                    marginRight:2.3,

                  }}
                >

                  {/* {text === 'Doctor' ? <PersonIcon /> : <HealthAndSafetyRoundedIcon />} */}
                  <VaccinesIcon />
                  
                </ListItemIcon>
                <ListItemText primary={'Medicine'} />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />
          {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >               
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menudata == 'Doctor' && <ADoctor />}
          {menudata == 'Department' && <ADrpartment />}
          {menudata == 'Appoinment' && <AAppoiment />}
          {menudata == 'Medicine' && <AMedicine />}


          {/* <DrawerHeader />
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography> */}
        </Box>
      </Box>
    </>
  );
}