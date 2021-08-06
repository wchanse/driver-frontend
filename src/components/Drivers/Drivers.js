import React, { useState, useEffect } from "react";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../style.css";
import "./drivers.css";
import driverapi from "../../api/driverapi";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { connect, useDispatch } from "react-redux";
import { addDriver } from "../../redux/actions";
import { TableHeader } from "./style";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Drivers = (props) => {
  // for add driver modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [drivers, setDrivers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    licenseNumber: "",
    age: 0,
    gender: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    licenseNumber: "",
    age: 0,
    gender: "",
  });

  // when editDriverId is null, no row is being edited
  const [editDriverId, setEditDriverId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    // make copy of old data to avoid mutating the state
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // handles new values in edit driver form
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    // take data from submitting addFormData
    const newDriver = {
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      city: addFormData.city,
      state: addFormData.state,
      zip: addFormData.zip,
      licenseNumber: addFormData.licenseNumber,
      age: addFormData.age,
      gender: addFormData.gender,
    };

    // send data
    const postDriver = async () => {
      const { data } = await driverapi.post("/drivers", newDriver);
      // add response to state
      // dispatch({ type: "ADD_DRIVER", payload: newDriver });
      props.onAddDriver(newDriver);
      const newDrivers = [...drivers, data];
      setDrivers(newDrivers);
    };
    postDriver();
    setShow(false);
  };

  // handles deletion in edit row
  const handleDelete = (driver) => {
    const deleteFromDB = async () => {
      await driverapi.delete(`/drivers/${driver.id}`);
    };
    deleteFromDB();
    const newDrivers = drivers.filter((d) => d.id !== driver.id);
    setDrivers(newDrivers);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const updatedDriver = {
      id: editFormData.id,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      city: editFormData.city,
      state: editFormData.state,
      zip: editFormData.zip,
      licenseNumber: editFormData.licenseNumber,
      age: editFormData.age,
      gender: editFormData.gender,
    };

    // send data
    const putDriver = async () => {
      const { data } = await driverapi.put(
        `/drivers/${editDriverId}`,
        updatedDriver
      );
      // add response to state
      const newDrivers = [...drivers];
      const index = drivers.findIndex((driver) => driver.id === editDriverId);
      newDrivers[index] = updatedDriver;
      setDrivers(newDrivers);
      setEditDriverId(null);
    };
    putDriver();
  };

  const handleEditClick = (event, driver) => {
    event.preventDefault();
    setEditDriverId(driver.id);

    const formValues = {
      id: driver.id,
      firstName: driver.firstName,
      lastName: driver.lastName,
      city: driver.city,
      state: driver.state,
      zip: driver.zip,
      licenseNumber: driver.licenseNumber,
      age: driver.age,
      gender: driver.gender,
    };

    setEditFormData(formValues);
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await driverapi.get("/drivers");
      setDrivers(data);
      console.log(data);
    };
    search();
    console.log(drivers);
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <div className="maincontent">
      <Container fluid>
        <Row>
          <div className="page">
            <h1 className="heading">Drivers</h1>
            <div className="row">
              <div className="text-right">
                <>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="mb-3"
                  >
                    Add Driver
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="my-modal"
                  >
                    <Modal.Header>
                      <Modal.Title>Add Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleAddFormSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>First name</Form.Label>
                          <input
                            type="text"
                            name="firstName"
                            required="required"
                            placeholder="Enter first name"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>Last name</Form.Label>
                          <input
                            type="text"
                            name="lastName"
                            required="required"
                            placeholder="Enter last name"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>City</Form.Label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>State</Form.Label>
                          <input
                            type="text"
                            name="state"
                            placeholder="Enter state"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>Zip</Form.Label>
                          <input
                            type="text"
                            name="zip"
                            placeholder="Enter zip"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>License number</Form.Label>
                          <input
                            type="text"
                            name="licenseNumber"
                            placeholder="Enter license no."
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>Age</Form.Label>
                          <input
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <Form.Label>Gender</Form.Label>
                          <input
                            type="text"
                            name="gender"
                            placeholder="Enter gender"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                        </Form.Group>
                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleAddFormSubmit}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
            </div>
            <form onSubmit={handleEditFormSubmit}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Firstname</StyledTableCell>
                      <StyledTableCell align="right">Lastname</StyledTableCell>
                      <StyledTableCell align="right">City</StyledTableCell>
                      <StyledTableCell align="right">State</StyledTableCell>
                      <StyledTableCell align="right">Zip</StyledTableCell>
                      <StyledTableCell align="right">
                        License No.
                      </StyledTableCell>
                      <StyledTableCell align="right">Age</StyledTableCell>
                      <StyledTableCell align="right">Gender</StyledTableCell>
                      <StyledTableCell width={300} align="center">
                        Actions
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {drivers.map((driver) => (
                      <React.Fragment>
                        {editDriverId === driver.id ? (
                          <EditableRow
                            key={nanoid}
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            setEditDriverId={setEditDriverId}
                            handleDelete={handleDelete}
                            driverObj={driver}
                          />
                        ) : (
                          <ReadOnlyRow
                            key={driver.id}
                            driver={driver}
                            handleEditClick={handleEditClick}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </form>
            {/* <table>
              <TableHeader>
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>License No.</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                    <th>Details</th>
                  </tr>
                </thead>
              </TableHeader>
              <tbody>
                {drivers.map((driver) => (
                  <React.Fragment>
                    {editDriverId === driver.id ? (
                      <EditableRow
                        key={nanoid}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        setEditDriverId={setEditDriverId}
                        handleDelete={handleDelete}
                        driverObj={driver}
                      />
                    ) : (
                      <ReadOnlyRow
                        key={driver.id}
                        driver={driver}
                        handleEditClick={handleEditClick}
                      />
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDriver: (driver) => dispatch(addDriver(driver)),
  };
};

export default connect(null, mapDispatchToProps)(Drivers);
