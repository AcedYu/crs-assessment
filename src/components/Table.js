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
// import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useDispatch } from "react-redux";
import { UPDATE_CONTACTS } from "../utils/actions";
import API from "../utils/API";

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

function SimpleTable(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    getContacts();
  });

  const getContacts = () => {
    API.getContacts()
      .then((results) => {
        dispatch({
          type: UPDATE_CONTACTS,
          contacts: results.data
        });
        setRows(results.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteContact = (event) => {
    let deleteid = event.target.getAttribute("entryid");
    API.deleteContact(deleteid)
      .then((results) => {
        return;
      })
      .catch((err) => alert("Something went wrong!"));
  };

  return (
    <div>
      <Paper className={classes.root} elevation={10}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Edit</TableCell>
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
                  <TableCell>
                    <Button color="primary" onClick={handleShow}>
                      <span role="img" aria-label="edit">
                        📝
                      </span>
                    </Button>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary"
                      tabindex="0"
                      type="button"
                      entryid={row.id}
                      onClick={deleteContact}
                    >
                      X
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Edit the name, email, and/or the phone number of the new
            contact.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Name"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            label="Phone #"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
