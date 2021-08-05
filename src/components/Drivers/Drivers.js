import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Modal, Form } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import '../style.css';
import './drivers.css';
import driverapi from '../../api/driverapi';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Drivers = () => {
  // for add driver modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [drivers, setDrivers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    zip: '',
    licenseNumber: '',
  });

  const [editFormData, setEditFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    zip: '',
    licenseNumber: '',
  });

  // when editDriverId is null, no row is being edited
  const [editDriverId, setEditDriverId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    // make copy of old data to avoid mutating the state
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // handles new values in edit driver form
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
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
    };

    // send data
    const postDriver = async () => {
      const { data } = await driverapi.post('/drivers', newDriver);
      // add response to state
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
    };

    setEditFormData(formValues);
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await driverapi.get('/drivers');
      setDrivers(data);
      console.log(data);
    };
    search();
    console.log(drivers);
  }, []);

  return (
    <div className="maincontent">
      <Container>
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

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Add Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleAddFormSubmit}>
                        <Form.Group className="mb-3">
                          <input
                            type="text"
                            name="firstName"
                            required="required"
                            placeholder="Enter first name"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <input
                            type="text"
                            name="lastName"
                            required="required"
                            placeholder="Enter last name"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />

                          <input
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <input
                            type="text"
                            name="state"
                            placeholder="Enter state"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <input
                            type="text"
                            name="zip"
                            placeholder="Enter zip"
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          <input
                            type="text"
                            name="licenseNumber"
                            placeholder="Enter license no."
                            className="form-control"
                            onChange={handleAddFormChange}
                          />
                          {/* <button type="submit">Add</button> */}
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
              <table>
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>License No.</th>
                    <th>Actions</th>
                    <th>Details</th>
                  </tr>
                </thead>
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
              </table>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Drivers;
