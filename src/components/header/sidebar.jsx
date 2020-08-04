import React from 'react';
import clsx from 'clsx';
import {useHistory} from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Divider,IconButton,Typography,CssBaseline,List,Toolbar,AppBar,Drawer,Button, Grid, InputBase, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {ListItem,ListItemIcon,ListItemText} from '@material-ui/core';

import {ArrowBack, AssignmentInd, Home, Apps, ContactMail, Assessment, AccountBox,
    Apartment, ArtTrack, Build, Class, FormatAlignCenter, Deck, Info, ThumbUp, AccountCircle, PinDropSharp, PowerSettingsNew, NotificationsNone, ChatBubbleOutline, SearchOutlined
} from '@material-ui/icons'
import { NavLink, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  loginBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  loginBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    marginRight: 36,
    display:"flex"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  search:{
    opacity:'0.9',
    padding:'0px 8px',
    fontSize:'0.9rem',
    color:'#ffffff',
    '&:hover':{
      backgroundColot:"#f2f2f2"
    }
  }
 
}));


export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout=(e)=>{
    e.preventDefault()    
    console.log("logout")
    localStorage.removeItem('usertoken')
    history.push('/');
}

  const menuItems = [
    {
        listIcon: <Home />,
        listText: "Dashboad",
        listPath:"/"        
    },
    {
      listIcon: <AccountCircle />,
      listText: "Login",
      listPath:"/login"
    },
    {
      listIcon: <AccountBox />,
      listText: "New User",
      listPath:"/newuser"
    },
    // {
    //   listIcon: <Apps />,
    //   listText: "New User",
    //   listPath:"/register"
    // },
   
    // {
    //     listIcon: <ThumbUp />,
    //     listText: "Job Status",
    //     listPath:"/jobstatus"
    // },
    // {
    //     listIcon: <Class />,
    //     listText: "Task Classification",
    //     listPath:"/classification"
    // },  
    
    // {
    //     listIcon: <AccountCircle />,
    //     listText: "Resume",
    //     listPath:"/resume"
    // }
]

const userLinks=[
  {
    listIcon: <Home />,
    listText: "Dashboad",
    listPath:"/"        
  },
  {
    listIcon: <AccountBox />,
    listText: "Customers",
    listPath:"/customer"
  },
  {
      listIcon: <AssignmentInd />,
      listText: "Create Job",
      listPath:"/createjob"
  },
  {
      listIcon: <FormatAlignCenter />,
      listText: "Job List",
      listPath: "joblist"
  },
  {
      listIcon: <Info />,
      listText: "Job basic info",
      listPath:"/basicconf"
  },
  {
      listIcon: <Apartment />,
      listText: "Rooms",
      listPath:"/rooms"
  },
  {
      listIcon: <Deck />,
      listText: "Items",
      listPath:"/items"
  },
  {
    listIcon: <Build />,
    listText: "Equipment",
    listPath:"/equipments"
  },
  {
      listIcon: <ArtTrack />,
      listText: "Mail Template",
      listPath:"/addemailTemplate"
  },
  {
      listIcon: <Assessment />,
      listText: "Report",
      listPath:"/report"
  },
  
]


  return (
      <>
      <CssBaseline />
      <AppBar
        position="fixed" //fixed
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              {/* <Typography variant="h6" noWrap style={{flexGrow:1}}> */}
              <Typography variant="h6" noWrap style={{flexGrow:1}}>
                Vistos 2.0
              </Typography>  
             
              <InputBase placeholder="Search" className={classes.search} startAdornment = {<SearchOutlined fontSize="small"/>}/>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small"/>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutline fontSize="small"/>
                </Badge>
              </IconButton>
              <IconButton>                  
                  <PowerSettingsNew />                  
              </IconButton>
              
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
          localStorage.usertoken?
          userLinks.map((lsItem, key) => (
              <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon alt={lsItem.listText} title={lsItem.listText}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText primary={lsItem.listText} />
              </ListItem>
              
            )): menuItems.map((lsItem, key) => (
              <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon alt={lsItem.listText} title={lsItem.listText}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText primary={lsItem.listText} />
              </ListItem>
            ))
          }
          {
            localStorage.usertoken?
            <ListItem button key={"logout"} onClick={logout}>
                <ListItemIcon alt={"Logout"} title={"Logout"}><AccountCircle/></ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>:""
          }
        </List>
        
      </Drawer>
      
    </>
  );
}