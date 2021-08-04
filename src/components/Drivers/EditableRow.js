import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  setEditDriverId,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter first name"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter last name"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Enter city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="state"
          required="required"
          placeholder="Enter state"
          value={editFormData.state}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="zip"
          required="required"
          placeholder="Enter zip"
          value={editFormData.zip}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="licenseNumber"
          required="required"
          placeholder="Enter license no."
          value={editFormData.licenseNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
      <td>
        <button type="button" onClick={() => setEditDriverId(null)}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
