import React,{useState} from 'react'
import '../../style.css'
// to change the default css of material ui
import {makeStyles} from '@material-ui/core/styles'

import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Typography, Box, Divider, List, ListItemIcon
} from '@material-ui/core'

import {ArrowBack, AssignmentInd, Home, Apps, ContactMail, Assessment, AccountBox,
    Apartment, ArtTrack, Build, Class, FormatAlignCenter, Deck, Info, ThumbUp, AccountCircle
} from '@material-ui/icons'

import MobileRightMenuSlider from '@material-ui/core/Drawer'

import { NavLink, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const useStyle = makeStyles => (theme=>({
    manuSliderContainer:{
        width:"50%",
        background:"#511",
        height:"100%",
        opacity: 1
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}))
const MainNavBar =()=> {    
    const [state,setState] = useState({
        right:false
    })

    const toggleSlider=(slider,open)=>()=>{
       setState({...state,[slider]:open})
    }  
    
    const classes = useStyle();

    const menuItems = [
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
            listText: "Job List"
        },
        {
            listIcon: <Info />,
            listText: "Job basic info"
        },
        {
            listIcon: <Apartment />,
            listText: "Rooms"
        },
        {
            listIcon: <Deck />,
            listText: "Items"
        },
        {
            listIcon: <ThumbUp />,
            listText: "Job Status"
        },
        {
            listIcon: <Class />,
            listText: "Task Classification"
        },
        {
            listIcon: <Build />,
            listText: "Equipment"
        },
        {
            listIcon: <ArtTrack />,
            listText: "Mail Template"
        },
        {
            listIcon: <Assessment />,
            listText: "Report"
        },
        {
            listIcon: <Apps />,
            listText: "Login",
            listPath:"/login"
        },
        
        {
            listIcon: <AccountCircle />,
            listText: "Resume",
            listPath:"/resume"
        }
    ]
    
    const sidelist = () => (
        <Box className={classes.manuSliderContainer} component="div" onClick={toggleSlider("right",false )}>
            
            <List>
                {menuItems.map((lsItem, key) =>
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText primary={lsItem.listText} />
                    </ListItem>
                )}
            </List>
        </Box>
    )

        return (
            <>
                <Box commponent="nav">
                    <AppBar position="static" style={{ background: "#222" }}>
                        <Toolbar>
                            <IconButton onClick={toggleSlider("right",true)}>
                                <ArrowBack style={{ color: "tomato" }} />
                            </IconButton>
                            <Typography variant="h5" style={{ color: "tan" }}>
                                Visto2.0
                            </Typography>                    
                            
                            {/* anchor value may be left/right/top/bottom */}
                            <MobileRightMenuSlider  open={state.right} anchor="right" onClose={toggleSlider("right",false)} >
                                {sidelist("right")}
                            </MobileRightMenuSlider>
                            
                            
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        );
    
}

export default MainNavBar;
