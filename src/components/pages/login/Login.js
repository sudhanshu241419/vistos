import React, { useState } from "react"
import {login} from './loginFunctions'
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter,useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import Navbar from '../../header/sidebar'

// styles
import useStyles from "./styles";
import useCommonStyles from "../commonStyles"

const Login = (props) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();


  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [forgotPasswordValue, setForgotPasswordValue] = useState("");
  const history = useHistory()
  
  const onSubmitLogin=(e)=>{
    e.preventDefault()
    
    const user={
      email:loginValue,
      password:passwordValue
    }
    
    login(user).then(res=>{
      
      if(res){   
        if(res.error){
          setError(true);
          return false;
        }
        history.push('/joblist')
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
                Login
            </Typography>   
            
                <Fade in={error}>
                  <Typography color="secondary" className={classes.errorMessage}>
                    Something is wrong with your login or password!
                  </Typography>
                </Fade>
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={loginValue}
                  onChange={e => setLoginValue(e.target.value)}
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
                <div className={classes.formButtons}>
                  {isLoading ? (
                    <CircularProgress size={26} className={classes.loginLoader} />
                  ) : (
                      <Button
                        disabled={
                          loginValue.length === 0 || passwordValue.length === 0
                        }

                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={onSubmitLogin}
                      >
                        Login
                      </Button>
                    )}


                  {/* <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                  onChange={(e, id) => setActiveTabId(id)}
                >
                  Forget Password
                </Button> */}
                </div>
              
          </div>

        </Paper>    
     
   
    </main>
    </div>
    }
    </>
  );
}

export default withRouter(Login);
