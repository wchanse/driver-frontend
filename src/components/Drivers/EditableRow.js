import React from 'react';
import driverapi from '../../api/driverapi';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  setEditDriverId,
  handleDelete,
  driverObj,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="state"
          placeholder="Enter state"
          value={editFormData.state}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="zip"
          placeholder="Enter zip"
          value={editFormData.zip}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="licenseNumber"
          placeholder="Enter license no."
          value={editFormData.licenseNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button onClick={() => setEditDriverId(null)}>Cancel</button>
        <button onClick={() => handleDelete(driverObj)}>Delete</button>
      </td>
    </tr>
  );
};

export default EditableRow;
