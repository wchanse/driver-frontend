import React from 'react';
import { Link } from 'react-router-dom';
import { DriverRow } from './style';

const ReadOnlyRow = ({ driver, handleEditClick, setEditDriverId }) => {
  return (
    <DriverRow key={driver.id}>
      <td>{driver.firstName}</td>
      <td>{driver.lastName}</td>
      <td>{driver.city}</td>
      <td>{driver.state}</td>
      <td>{driver.zip}</td>
      <td>{driver.licenseNumber}</td>
      <td>{driver.age}</td>
      <td>{driver.gender}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </button>
      </td>
      <td>
        <Link to={`/drivers/${driver.id}`}>
          <button
            type="button"
            // onClick={(event) => handleEditClick(event, driver)}
          >
            View
          </button>
        </Link>
      </td>
    </DriverRow>
  );
};

export default ReadOnlyRow;
