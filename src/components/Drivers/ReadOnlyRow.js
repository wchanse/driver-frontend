import React from "react";
import { Link } from "react-router-dom";
import { ActionButton, DriverRow } from "./style";
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

const ReadOnlyRow = ({ driver, handleEditClick, setEditDriverId }) => {
  return (
    <StyledTableRow key={driver.id}>
      <StyledTableCell component="th" scope="row">
        {driver.firstName}
      </StyledTableCell>
      <StyledTableCell align="right">{driver.lastName}</StyledTableCell>
      <StyledTableCell align="right">{driver.city}</StyledTableCell>
      <StyledTableCell align="right">{driver.state}</StyledTableCell>
      <StyledTableCell align="right">{driver.zip}</StyledTableCell>
      <StyledTableCell align="right">{driver.licenseNumber}</StyledTableCell>
      <StyledTableCell align="right">{driver.age}</StyledTableCell>
      <StyledTableCell align="right">{driver.gender}</StyledTableCell>
      <StyledTableCell align="center">
        <ActionButton onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </ActionButton>
        <Link to={`/drivers/${driver.id}`}>
          <ActionButton
            type="button"
            // onClick={(event) => handleEditClick(event, driver)}
          >
            View
          </ActionButton>
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ReadOnlyRow;
