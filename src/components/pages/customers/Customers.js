import React,{ forwardRef } from 'react';
import PropTypes from 'prop-types';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { Typography, Divider } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import TableRow from '@material-ui/core/TableRow';
// import Navbar from'../../header/mainnavbar'
import Navbar from '../../header/sidebar'
// import useStyles from "./styles"
import useCommonStyles from "../commonStyles"
import MaterialTable from 'material-table';
import {AddBox,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear,DeleteOutline,Edit,FilterList,FirstPage,LastPage,
  Remove,SaveAlt,Search,ViewColumn
} from "@material-ui/icons";
import { withRouter,useHistory } from "react-router-dom";
import { Grid, Typography, Divider } from '@material-ui/core';
import CustomerGrothChart from './CustomerChart'

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
const Customers = (props) => {
  const history = useHistory()
  const commonClasses = useCommonStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'name' },
      { title: 'Last Name', field: 'lname' },
      { title: 'Email', field: 'email' },//type: 'numeric'
      { title: 'Phone1', field: 'phone1' }, // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }, 
      { title: 'Phone2', field: 'phone2' },
      { title: 'Remind', field: 'remind' },
    ],
    data: [
      { name: 'Mehmsdfdset', lname: 'Baran', 'email':"sfds@gmail.com",phone1: 1987243244, "phone2": 6332432432,remind:"yes" },
      { name: 'Mdgehmet', lname: 'Baran', 'email':"werew@gmail.com",phone1: 1987243244, "phone2": 6332432432,remind:"No" },
      { name: 'ertre', lname: 'Baran', 'email':"hjh@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"No" },
      { name: 'jhkhj', lname: 'Baran', 'email':"xcvc@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'sfds', lname: 'Baran', 'email':"xcvxc@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"No" },
      { name: 'cv', lname: 'Baran', 'email':"nnmnb@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'cxvx', lname: 'Baran', 'email':"uwef@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'bnmnb', lname: 'Baran', 'email':"aadfde@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'wew', lname: 'Baran', 'email':"bbccewew@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"No" },
      { name: 'ytuy', lname: 'Baran', 'email':"jlsdf@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"No" },
      { name: 'fdsf', lname: 'Baran', 'email':"jlsdf@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'uioiu', lname: 'Baran', 'email':"jlsdf@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
      { name: 'erw', lname: 'Baran', 'email':"jlsdf@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"No" },
      { name: 'ytuty', lname: 'Baran', 'email':"jlsdf@gmail.com",phone1: 1987243244, phone2: 6332432432,remind:"yes" },
     
    ],
  });

  return (
    <>
    {
    localStorage.usertoken? 
    <div className={commonClasses.root}>
      <Navbar />
      <main className={commonClasses.content}>
        <div className={commonClasses.toolbar} />        
        <div style={{"display":"flex","width":"100%"}}>
          <Paper elevation={3} component = "div" className={commonClasses.rootPaper}>
          <MaterialTable
            size="small"
            icons={tableIcons}
            title="Customers"
            columns={state.columns}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              }
            }}
            data={state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
    />
    </Paper>
    
        <Paper component="div" variant={3} className={commonClasses.customerGraph}>              
              <CustomerGrothChart />
        </Paper>
    
    </div>
      </main>
    </div>:history.push('/login')
    }
    </>
  );
}

export default Customers