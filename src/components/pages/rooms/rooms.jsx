import React,{ forwardRef } from 'react';
import Paper from '@material-ui/core/Paper';
import Navbar from '../../header/sidebar'
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

const editHandler=(oldData,newData)=>{
    console.log(oldData);
    console.log(newData);
}
const deleteHandler=(data)=>{
    console.log(data);
}

const fetchData=()=>{
 //call api 
}
const Rooms = (props) => {
  const history = useHistory()
  const commonClasses = useCommonStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Room Name', field: 'name' },
     
      
    ],
    data: [
      { name: 'Hall'},
      { name: 'Dyningroom' },
      { name: 'Bedroom' },
      { name: 'Kitchen'},
      { name: 'Bathroom'},
      { name: 'Study Room'},
      { name: 'Spare Room'},
      { name: 'Store Room'},
      { name: 'Garage'},
      { name: 'Washroom'},
      { name: 'Restroom'},
      { name: 'Balcony'},
      { name: 'Nursery'},
      { name: 'Utility room'},
      { name: 'Conservatory'},
      { name: 'Living room'},
      { name: 'Drawing room'},
      { name: 'Lounge'},
      { name: 'Parlour'},
      { name: 'Mud room'},
      { name: 'Basement'},
      { name: 'Games room'},
      { name: 'Wine cellar'},
      { name: 'Corridor'},
      { name: 'Shed'},
      { name: 'Porch'},
      { name: 'Library'},
      { name: 'Tree House'},
      { name: 'Green House'},
      { name: 'Other'},

      
     
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
            title="Rooms"
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
                      editHandler(oldData,newData);
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
                      deleteHandler(oldData)
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

export default Rooms