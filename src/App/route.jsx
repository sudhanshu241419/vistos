import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/index'
import Customer from '../components/pages/customers/Customers'
import Createjob from '../components/pages/createjobs/Createjob'
import LoginForm from '../components/pages/login/Login'
import NewUser from '../components/pages/newuser/newuser'
import Resume from '../components/pages/resume/Resume'
import BasicConfiguration from '../components/pages/basicConfiguration/configuration'
import Rooms from '../components/pages/rooms/rooms'
import JobList from '../components/pages/createjobs/jobslist'
import Items from '../components/pages/items/items'
import Equipments from '../components/pages/equipments/equipments'
import CreateEmailTemplate from '../components/pages/emailtemplate/emailtemplate'
//import Logout from './components/pages/logout'
const Routes=()=>{
    return (
      <>      
      <Route exact path="/" component={Home}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/createjob" component={Createjob}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/basicconf" component={BasicConfiguration}/>
      <Route path="/rooms" component={Rooms}/>
      <Route path="/joblist" component={JobList}/>
      <Route path="/items" component={Items}/>
      <Route path="/equipments" component={Equipments}/>
      <Route path="/addemailTemplate" component={CreateEmailTemplate}/>
      <Route path="/newuser" component={NewUser}/>
      
      {/* <Route path="/logout" component={Logout}/> */}
      </>
    );
  }
  
  export default Routes;