import React from 'react';
import {Avatar,Typography,Box,Grid,Card,CardActions,CardContent,Button,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import reactRouterDom from 'react-router-dom';
import avatar from './avatar.png'
import Typed from 'react-typed'
import JobGraph from './JobGraph'
import CustomerGraph from './CustomerGraph'
import NewCustomer from './NewCustomer'
import NewJob from './NewJob'


const useStyle = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin:theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    typeContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1,
       
    },
    jobGraph:{
        width: "50%",  
        height:"auto",         
        marginLeft: theme.spacing(2),
    },
    root: {
        width: 560,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      rootPaper: {
        width: "100%",           
        marginLeft: theme.spacing(2),
              
    },
    reportContainer:{
                       
        width:"100%",
        textAlign:"center",
        zIndex:1,
        marginLeft:theme.spacing(15)
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        //necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    newJobContainer:{                        
        width:"100%",
        textAlign:"center",
        zIndex:1,        
    },
}))
const Header =()=>{
    const classes = useStyle();
    return (
            <>
            {
            localStorage.usertoken?     
            <main className={classes.content}>
             <div className={classes.toolbar} />
                    <div style={{"display":"flex","width":"100%"}}>
                   
            <Box className={classes.reportContainer}>
               <Grid container spacing={1}>                                          
                    
                    
                    <Grid item >

                        <Card className={classes.root} variant="outlined">    
                        <CardContent> 
                        <Typography variant="h5" component="h2">
                            Total Jobs
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                1000
                            </Typography>    
                            <JobGraph />
                        </CardContent> 
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card className={classes.root} variant="outlined">    
                        <CardContent> 
                        <Typography variant="h5" component="h2">
                            Total Customer
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                1500
                            </Typography>    
                            <CustomerGraph />
                        </CardContent> 
                        </Card>
                    </Grid>                                  

                </Grid> 
                </Box>
                <Box className={classes.newJobContainer}>     
                    <Grid item >
                        <Card variant="outlined">    
                        <CardContent> 
                        <Typography variant="h5" component="h2">
                            Today Jobs
                            </Typography>                          
                            <NewJob />
                        </CardContent> 
                        </Card>
                    </Grid>
                </Box>    
                {/* <Grid item >
                    <Card className={classes.root} variant="outlined">    
                    <CardContent> 
                    <Typography variant="h5" component="h2">
                        Today Customer
                        </Typography>                          
                        <NewCustomer />
                    </CardContent> 
                    </Card>
                    </Grid> */}   
               </div></main>          
                :
                <Box className={classes.typeContainer}>
                <Grid container justify="center">
                        <Avatar src={avatar} alt="Visto 2.0" align="center" className={classes.avatar}/>
                </Grid>
                <Typography className={classes.title} variant="h4" align="center">
                    <Typed strings={["Transportation of Goods and Cost Estimation tool"]} typeSpeed={40}></Typed>
                </Typography>
                <Typography className={classes.title} variant="h6" align="center">
                    <Typed strings={["must manage the information of transit and estimation of cost, customer information and items records."]} typeSpeed={40}></Typed>
                </Typography>
            </Box> 
            }
           </>
        )
   
}
export default Header;