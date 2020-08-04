import {makeStyles} from '@material-ui/core/styles'
export default makeStyles(theme => ({
    root: {
        display: 'flex',
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
    heading:{
        margin: theme.spacing(1), 
        color:"#222",        
    },
    rootPaper: {
        width: "70%",           
        marginLeft: theme.spacing(2),
              
    },
    createJobPaper: {
        width: "100%",           
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),        
    },
    jobListPaper: {
        width: "100%",           
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),        
    },
    chieldPaper: {
        width: "100%",           
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),        
    },
    customerGraph:{
        width: "25%",           
        marginLeft: theme.spacing(2),
    }
}))