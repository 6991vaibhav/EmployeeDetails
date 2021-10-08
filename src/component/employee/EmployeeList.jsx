import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export const EmployeeList = ({ data = [], handleDelete, handleEdit }) => {
  return (
    <div className="emp-list-wrapper">
      <h2>Employee List</h2>
      {data.length > 0 && (
        <table className="emp-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Designation</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <EmployeeListItem
                key={index}
                id={index}
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
