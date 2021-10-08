import React from "react";

export const EmployeeListItem = ({ item, id, handleDelete, handleEdit }) => {
  return (
    <tr>
      {Object.keys(item).map((field) => (
        <td>{item[field]}</td>
      ))}
      <td>
        <button className="btn btn-primary" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => handleEdit(item)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default EmployeeListItem;
