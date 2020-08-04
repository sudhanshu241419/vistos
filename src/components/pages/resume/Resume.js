import React from 'react'
import {Typography} from '@material-ui/core'
import Navbar from'../../header/mainnavbar'
import useStyles from "./styles"
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>

        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>          
            <Grid item xs zeroMinWidth>
                <Typography noWrap>
                    Resume : Sudhanshu kumar
                </Typography>
            </Grid>
            </Grid>
        </Paper>

        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>         
            <Grid item xs>
                <Typography noWrap>Cell No.: +91 9560248014, Email: sumca2004@gmail.com</Typography>
            </Grid>
            </Grid>
        </Paper>

        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
            
            <Grid item xs>
                <Typography>
                Working as Sr. Software Engineer at Bravvura india (Munch Ado India Pvt. Ltd., Advent matrix ) since July 2013 to till date.
                Worked as Consultant – PHP at Keyideas InfoTech (P) Ltd since Mar 2012 to July 2013 date. 
                Worked as Software Engineer at MYZEAL IT Solution Private Limited since Jan 2011 to Feb 2012. 
                Worked as Software engineer at G & H Works Inc. Gurgaon since April 2009 to Dec 2010. 
                Worked as PHP Developer, MySql at A1-Technology Mohali, 8C-179 sec since Oct, 2007 to April 2009
                </Typography>
            </Grid>
            </Grid>
        </Paper>
    </div>


        </> 
    )
}

export default Resume