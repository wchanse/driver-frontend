import React from 'react';
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
      <td>
        <button onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </button>
      </td>
      <td>
        <button
          type="button"
          // onClick={(event) => handleEditClick(event, driver)}
        >
          View
        </button>
      </td>
    </DriverRow>
  );
};

export default ReadOnlyRow;
