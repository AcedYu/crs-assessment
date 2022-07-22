import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const rows = [
  {
    id: 632,
    name: "Markos",
    email: "mark@gm.com",
    phone: "192873981"
  },
  {
    id: 633,
    name: "Elias",
    email: "ela@yah.com",
    phone: "589765"
  },
  {
    id: 634,
    name: "Lukas",
    email: "lukas@gma.com",
    phone: "87654"
  },
  {
    id: 635,
    name: "Kenny",
    email: "ken@gma.com",
    phone: "098765"
  },
  {
    id: 636,
    name: "John ",
    email: "john@hotma.com",
    phone: "09876"
  }
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={10}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Button color="secondary">X</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
