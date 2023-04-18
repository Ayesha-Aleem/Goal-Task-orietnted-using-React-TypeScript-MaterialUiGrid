import React from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

function Box(props: any) {
  const { rows } = props;
  const columns = [
    { name: "day", title: "day" },
    { name: "goals", title: "goals" },
  ];
  return (
    <>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
}
export default Box;
