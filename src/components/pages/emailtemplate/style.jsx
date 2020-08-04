import {makeStyles} from '@material-ui/core/styles'
export default makeStyles(theme => ({
    paper: {
        width: "100%",
        margin: `${theme.spacing(1)}px auto`,        
        opacity:1,
        backgroundColor:"#fff",
        color:"#000"
      },
      template: {
        width: "30%",
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(2),
        opacity:1,
        backgroundColor:"#fff",
        color:"#000"
      },
      margin: {
        margin: theme.spacing(1),
      },
      textField: {
        width: '40ch',
        color:'#000'
      },
      tab: {
        fontWeight: 400,
        fontSize: 18,
        color:"#000"
      },
      addTemplatebutton:{
        margin: `${theme.spacing(1)}px auto`, 
      },
      toolbar: {
        display: 'flex',       
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        //necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    basicinfo:{
      marginLeft: theme.spacing(2),      
      width: "30%",
      height: "auto",       
    },
    templateForm: {
      width: "100%",
      margin: `${theme.spacing(1)}px auto`, 
      padding: theme.spacing(2),       
      opacity:1,
      backgroundColor:"#fff",
      color:"#000"
    },
    submitButton: {
      width: "20%",
      margin: `${theme.spacing(5)}px auto`, 
      marginLeft: theme.spacing(2),  
      padding: theme.spacing(2),       
      opacity:1     
    },
    }))

