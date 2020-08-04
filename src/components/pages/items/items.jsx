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
const Items = (props) => {
  const history = useHistory()
  const commonClasses = useCommonStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Item Name', field: 'name' },
      { title: 'Item Point', field: 'point' },
      { title: 'Item Type', field: 'type' },//type: 'numeric'
     
    ],
    data: [
      { name: 'Chair', point: 6, type:"Furniture"},
      { name: 'Dining table', point: 6, 'type':"Furniture"},
      { name: 'Queen Bed', point: 10, 'type':"Bed"},
      { name: 'Glasstop', point: 6, 'type':"Glass"},
      { name: 'Stool', point: 6, 'type':"Furniture"},
      { name: 'Record Player', point: 6, 'type':"Special"},
      { name: 'Piano', point: 6, 'type':"Special"},
      { name: 'TV', point: 6, 'type':"Electonics"},
      { name: 'Table Fan', point: 6, 'type':"Electronics"},
      { name: 'Kitchen Goods', point: 6, 'type':"Kitchen" },
      { name: 'Books', point: 6, 'type':"Study" },
      { name: 'Sofa', point: 6, 'type':"Furniture" },
      { name: 'Dressing Table', point: 12, 'type':"Furniture" },
      { name: 'Study Table', point:9, 'type':"Furniture" },
     
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
          <Paper className={commonClasses.rootPaper} component="div" elevation={3}>
          <MaterialTable
            size="small"
            icons={tableIcons}
            title="Items"
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                }
              }}
            columns={state.columns}
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
      </main>
    </div>:history.push('/login')
    }
    </>
  );
}

export default Items