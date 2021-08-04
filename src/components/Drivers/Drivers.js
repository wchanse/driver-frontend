import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import '../style.css';
import './drivers.css';
import driverapi from '../../api/driverapi';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Drivers = () => {
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

  const [sortType, setSortType] = useState('asc');

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
    const postDriver = async () => {
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
    postDriver();
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

            <h2 className="mt-3">Add a Driver</h2>
            <form onSubmit={handleAddFormSubmit}>
              <input
                type="text"
                name="firstName"
                required="required"
                placeholder="Enter first name"
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="lastName"
                required="required"
                placeholder="Enter last name"
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="city"
                required="required"
                placeholder="Enter city"
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="state"
                required="required"
                placeholder="Enter state"
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="zip"
                required="required"
                placeholder="Enter zip"
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="licenseNumber"
                required="required"
                placeholder="Enter license no."
                onChange={handleAddFormChange}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Drivers;
