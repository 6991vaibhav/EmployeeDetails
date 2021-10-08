import React, { useState } from 'react'
import { DESIGNATION_FIELD, EXPERIENCE_FIELD, FIRST_NAME_FIELD, LAST_NAME_FIELD } from '../../utils/constants';
import CustomInput from '../common/CustomInput';

export const EmployeeDetailsForm = ({ handleAddEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [designation, setDesignation] = useState('');
  const [experience, setExperience] = useState('');

  const _handleUpdate = (field, value) => {
    switch (field) {
      case FIRST_NAME_FIELD:
        setFirstName(value);
        break;
      case LAST_NAME_FIELD:
        setLastName(value);
        break;
      case DESIGNATION_FIELD:
        setDesignation(value);
        break;
      case EXPERIENCE_FIELD:
        setExperience(value);
        break;
      default:
    }
  }

  const _handleAdd = () => {
    handleAddEmployee({
      firstName,
      lastName,
      designation,
      experience,
    });
    // we can even create initial state as an object which will have all the
    // fields as attributes the update rectively on change, so that while clearing the form we can clear it in one shot
    setFirstName('')
    setLastName('')
    setDesignation('')
    setExperience('')
  }

  return (
    <div className="emp-details">
      <h2 className="emp-details-header">Employee Details</h2>
      <div className="emp-details-body">
        <CustomInput type="text" field={"firstName"} title="First Name" value={firstName} handleChange={_handleUpdate} />
        <CustomInput type="text" field={"lastName"} title="Last Name" value={lastName} handleChange={_handleUpdate} />
        <CustomInput type="text" field={"designation"} title="Designation" value={designation} handleChange={_handleUpdate} />
        <CustomInput type="number" field={"experience"} title="Experience" value={experience} handleChange={_handleUpdate} />
      </div>
      <div className="emp-details-footer">
        <button className=" btn btn-primary" onClick={_handleAdd}>Add Employee</button>
      </div>
    </div>
  )
}

export default EmployeeDetailsForm;