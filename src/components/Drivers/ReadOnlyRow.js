import React from 'react';

const ReadOnlyRow = ({ driver, handleEditClick, setEditDriverId }) => {
  return (
    <tr key={driver.id}>
      <td>{driver.firstName}</td>
      <td>{driver.lastName}</td>
      <td>{driver.city}</td>
      <td>{driver.state}</td>
      <td>{driver.zip}</td>
      <td>{driver.licenseNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, driver)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
