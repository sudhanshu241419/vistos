import React, { useState,forwardRef } from 'react'
import Paper from '@material-ui/core/Paper'
import Navbar from '../../header/sidebar'
import useCommonStyles from "../commonStyles"
import useStyles from "./style"
import { Editor } from '@tinymce/tinymce-react' 
import { Typography, Divider, TextField, Tabs, Tab, Fade, Button,Accordion,AccordionSummary,AccordionDetails,Grid,FormControl} from '@material-ui/core'
import clsx from 'clsx'

import MaterialTable from 'material-table';
import {AddBox,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear,DeleteOutline,Edit,FilterList,FirstPage,LastPage,
  Remove,SaveAlt,Search,ViewColumn,ExpandMore
} from "@material-ui/icons";

import { withRouter,useHistory } from "react-router-dom";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

const Emailtemplate = (props) => {
  const history = useHistory()
  const commonClasses = useCommonStyles();
  const classes = useStyles();  
  const [templateName, setNameValue] = useState("");
  const [content, setContentValue] = useState("");
  const [activeTabId, setActiveTabId] = useState(0);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Template Name', field: 'name' },
      { title: 'Contents', field: 'contents' },
     
      
    ],
    data: [
      { name: 'A-Z Follow Up',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: 'Hourly Full move',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: 'Load Only',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: 'Points Move',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: 'Upload Only',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: 'Web contact Reply',contents:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
 
    ],
  });  

  return (
    <>
    {
    localStorage.usertoken? 
    <div className={commonClasses.root}>
    <Navbar/>           
    <main className={commonClasses.content}>
     <div className={commonClasses.toolbar} />
        <div style={{"display":"flex","width":"100%"}}>
        <Paper elevation={3} component = "div" className={classes.paper}>
        <Typography variant="h6" className={commonClasses.heading}>
            Manage Template
        </Typography>
        <Divider/>
        <FormControl className={classes.templateForm} >
          <TextField id="templateName" label="Template Name" variant="outlined"  size="small" value="Hourly Full move"/>
        </FormControl>   
        <FormControl className={classes.templateForm}>                            
                <TextField                                    
                    label="Template Contents"                                    
                    variant="outlined"
                    multiline                                    
                    labelWidth={300}
                    rows={10}
                    value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                    />                             
        </FormControl>  
        <Button variant="contained" color="primary" size="small" className={classes.submitButton}>
            Submit
        </Button>
        </Paper>
        

        <div className={classes.basicinfo}>                    
            <Paper elevation={3} component = "div" className={classes.basicconf}>
                <Typography variant="h6" className={commonClasses.heading}>
                  Template List
                </Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>1. A-Z Follow Up</Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>2. Hourly Full move</Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>3. Load Only</Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>4. Points Move</Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>5. Upload Only</Typography>
                <Divider/>
                <Typography className={commonClasses.heading}>6. Web contact Reply</Typography>
                <Divider/>
                
            </Paper>
        </div>
        </div>






    



          {/* </Paper> */}
      </main>
    </div>:history.push('/login')
    }
    </>
  );
}

export default Emailtemplate