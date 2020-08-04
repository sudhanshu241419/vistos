import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});

function createData(jobid,firstname, lastname, phone, email) {
  return { jobid, firstname, lastname, phone, email };
}

const rows = [
  createData('101','Sood', "Hook","783927429", "soodhook@gmail.com"),
  createData('732','Fright', "Tery","823947983", "fright@gmail.com"),
  createData('874','Fire', "Heny","23443543655", "fireheny@gmail.com"),
  createData('101','Sood', "Hook","783927429", "soodhook@gmail.com"),
  createData('732','Fright', "Tery","823947983", "fright@gmail.com"),
  createData('874','Fire', "Heny","23443543655", "fireheny@gmail.com"),
  createData('101','Sood', "Hook","783927429", "soodhook@gmail.com"),
  createData('732','Fright', "Tery","823947983", "fright@gmail.com"),
  createData('874','Fire', "Heny","23443543655", "fireheny@gmail.com"),
  createData('101','Sood', "Hook","783927429", "soodhook@gmail.com"),
  createData('732','Fright', "Tery","823947983", "fright@gmail.com"),
  createData('874','Fire', "Heny","23443543655", "fireheny@gmail.com"),
  
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
       
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell>Job Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.firstnae}>
              <TableCell component="th" scope="row">
                {row.jobid}
              </TableCell>    
              <TableCell align="right">{row.firstname}</TableCell>          
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
