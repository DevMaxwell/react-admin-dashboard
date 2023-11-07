import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { TableHead } from "@mui/material";
import { makeStyles } from "@mui/system";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Frozen yoghurt", 159, "2 March 2022", "Approved"),
  createData("Ice cream sandwich", 237, "2 March 2022", "Pending"),
  createData("Eclair", 262, "2 March 2022", "Approved"),
  createData("Cupcake", 305, "2 March 2022", "Pending"),
  createData("Gingerbread", 356, "2 March 2022", "Ongoing"),
];

// const makeStyle = (status) => {
//   if (status === "Approved") {
//     return {
//       background: "#e5f2e5",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
//     };
//   }
// };

export default function BasicTable() {
  return (
    <div className='Table'>
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='left'>Tracking Id</TableCell>
              <TableCell align='left'>Date</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='left'>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='left'>{row.trackingId}</TableCell>
                <TableCell align='left'>{row.date}</TableCell>
                <TableCell align='left'>
                  {/* Use makeStyles to change style of span in refrence to field attribute */}
                  {/* <span className='sttus' style={makeStyles(row.status)}>
                    {" "} */}
                  {row.status} {/* </span> */}
                </TableCell>
                <TableCell align='left' className='detail'>
                  {" "}
                  Detail
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
