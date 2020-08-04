import {makeStyles} from '@material-ui/core/styles'
import { Opacity } from '@material-ui/icons';
export default makeStyles(theme => ({

    
    basicinfo:{
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),
        width: "30%",
        height: "auto",       
    },
    basicconf:{
        marginLeft: theme.spacing(1),
        widht:"30%",
        height:"auto",        
    },
    estimation:{
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(3),
        widht:theme.spacing(50),
        height:"auto"
    },
    margin: {
        margin: theme.spacing(1),
      },
      textField: {
        width: '25ch',
        color:'#000'
      },
      
      table: {
        minWidth: "30%",
      },
      color:{
          color:"tomato"
      },
      accordionHeading:{
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular       
      },
      headingT:{
        margin: theme.spacing(0),        
        color:"tomato",        
    },
    formInput:{margin: theme.spacing(0)},
    formControl: {
        fontSize: '0.9rem',        
        minWidth: 300,
        minHeight: 0,
        margin: theme.spacing(1),
                   
      },
    formControlStoreText: {
        margin: theme.spacing(1),
        minWidth: 250,
        fontSize: '0.9rem', 
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },


      radioRoot: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 150,
      },

      font_size:{
        fontSize:"0.9rem",        
      },
      itemPaper:{
        marginTop: theme.spacing(3),
        width: "100%",
        border:"1px solid",
        padding:"10px"     
      },
      addressBox:{
        margin: theme.spacing(1),
        width: 110,
        fontSize: '0.9rem',
      },
      addressBoxDo:{
        margin: theme.spacing(1),
        width: 138,
        fontSize: '0.9rem',
      },
      addressBoxCard: {
        minWidth: 500,
        margin: theme.spacing(1),
      },
      addressBoxEstimate:{
        margin: theme.spacing(1),
        width: 500,
        fontSize: '0.9rem',
      },
      roomDetailCard:{
        margin: theme.spacing(1),
        width: 650,
        fontSize: '0.9rem',
      }
      
  }));