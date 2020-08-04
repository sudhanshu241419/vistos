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
const JobList = (props) => {
  const history = useHistory()
  const commonClasses = useCommonStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Job Id', field: 'id' },
      { title: 'Customer Name', field: 'fname' },
      { title: 'Status', field: 'status' },
      { title: 'Move Date', field: 'move_date' },//type: 'numeric'
      { title: 'Possiable Move Date', field: 'possiable_move_date' }, // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }, 
      { title: 'Notes', field: 'notes' },
      { title: 'Estimated Final', field: 'estimated_final' },
      { title: 'Crated By', field: 'created_by' },
      { title: 'Crated On', field: 'created_on' },
      { title: 'Store', field: 'store' },
    ],
    
    data: [
      { id: 'X-092', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Dining table, chair",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'D29473', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Need to move furniture",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'U328473', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Two Quene size bed",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'L3294732', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"NTwo Quene size bed",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'ML932743', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Need to move furniture",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'GH37', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Dressing table, Dining table, chair",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'G0034', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Dressing table, Dining table, chair",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'N83493', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Two Quene size bed, Dressing table, Dining table, chair",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
      { id: 'K38473', fname: 'Baran', status:"Lead",move_date: "07-07-2020", possiable_move_date: '08-07-2020',notes:"Dining table, chair",estimated_final:1200,created_by:"System",created_on:"05-07-2020",store:"Austin" },
     
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
          <Paper className={commonClasses.jobListPaper} component="div" elevation={3}>
          <MaterialTable
            size="small"
            icons={tableIcons}
            title="Jobs List"
            columns={state.columns}
            data={state.data}
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                }
              }}
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
      </main>
    </div>:history.push('/login')
    }
    </>
  );
}

export default JobList