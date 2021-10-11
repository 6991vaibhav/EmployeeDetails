import React, { useState } from 'react';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import EmployeeList from './EmployeeList';

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const _handleAddEmployee = (empDetails) => {
    setEmployeeList([...employeeList, empDetails]);
  }

  const _handleDelete = (key) => {
    const filteredList = employeeList.filter((emp, index) => index !== key);
    setEmployeeList(filteredList);
  }

  const _handleEdit = (emp) => {
    console.log(emp);
  }

  return (
    <div className="emp-wrapper">
      <EmployeeDetailsForm handleAddEmployee={_handleAddEmployee} />
      <EmployeeList data={employeeList} handleDelete={_handleDelete} handleEdit={_handleEdit} />
    </div>
  )
}

export default Employee;