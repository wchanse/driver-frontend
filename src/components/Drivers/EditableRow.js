import React from "react";
import driverapi from "../../api/driverapi";
import { ActionButton, EditInput } from "./style";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  setEditDriverId,
  handleDelete,
  driverObj,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <EditInput
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="city"
          placeholder="Enter city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="state"
          placeholder="Enter state"
          value={editFormData.state}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="zip"
          placeholder="Enter zip"
          value={editFormData.zip}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="licenseNumber"
          placeholder="Enter license no."
          value={editFormData.licenseNumber}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="number"
          name="age"
          placeholder="Enter age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <EditInput
          type="text"
          name="gender"
          placeholder="Enter gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        />
      </StyledTableCell>
      <StyledTableCell style={{ display: "flex", flexDirection: "row" }}>
        <ActionButton type="submit">Save</ActionButton>
        <ActionButton onClick={() => setEditDriverId(null)}>
          Cancel
        </ActionButton>
        <ActionButton onClick={() => handleDelete(driverObj)}>
          Delete
        </ActionButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default EditableRow;
