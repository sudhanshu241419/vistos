import React, { useState } from "react"
import {register} from './newUserFunctions'
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter,useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import Navbar from '../../header/sidebar'

// styles
import useStyles from "./styles";
import useCommonStyles from "../commonStyles"

const Newuser = (props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();


  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [forgotPasswordValue, setForgotPasswordValue] = useState("");
  const [errorMessage,setErrorMessage]=useState("");
  const history = useHistory()
  
    const ValidateEmail=(inputText)=>{
        var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;       
        if(inputText.match(mailformat)){        
            return true;
        }else{
            return false;
        }
    }

    const PasswordLength=(inputText)=>{
        console.log(inputText.length);
        if(inputText.length >=8){
            return true
        }
        return false
    }
  
    const onSubmitRegister=(e)=>{
        e.preventDefault()
        // if(!ValidateEmail(emailValue)){
        //     setErrorMessage("You have entered an invalid email address!")
        //     setError(true)
        //     return false
        // }
        // if(!PasswordLength(passwordValue)){
        //     setErrorMessage("Password length should be 8 charector!")
        //     setError(true)
        //     return false
        // }
        const user={
            first_name:nameValue,
            email:emailValue,
            password:passwordValue
        }
        
        
        register(user).then(res=>{
        if(res){ 
            if(res.error){
                setErrorMessage("Something is wrong with details!")
                setError(true)
                return false
            }           
            history.push('/login')
        }
        })
    }

  return (
    <>
    {
    localStorage.usertoken?history.push('/'):    
    <div className={commonClasses.root}>
      <Navbar />
      <main className={commonClasses.content}>
        <div className={commonClasses.toolbar} />

        <Paper className={classes.paper} elevation={3}>
          <div className={classes.form}>
         
            <Typography color="secondary" className={classes.tab}>
                    New User
            </Typography>            
            
                <Fade in={error}>
                  <Typography color="secondary" className={classes.errorMessage}>
                    {errorMessage}
                </Typography>
                </Fade>
                <TextField
                  id="name"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={nameValue}
                  onChange={e => setNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Full Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={emailValue}
                  onChange={e => setEmailValue(e.target.value)}
                  margin="normal"
                  placeholder="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.creatingButtonContainer}>
                  {isLoading ? (
                    <CircularProgress size={26} />
                  ) : (
                      <Button
                        disabled={
                          emailValue.length === 0 ||
                          passwordValue.length === 0 ||
                          nameValue.length === 0
                        }
                        size="large"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.createAccountButton}
                        onClick={onSubmitRegister}
                      >
                        Create your account
                      </Button>
                    )}
                </div>
            
          </div>

        </Paper>    
     
   
    </main>
    </div>
    }
    </>
  );
}

export default withRouter(Newuser);
