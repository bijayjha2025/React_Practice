
import React from "react";

const PersonalInfo = ({ formData, handleChange, nextStep}) => {
    return(
        <div>
            <h2>Step 1: Personal Information</h2>

            <label>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
            <input type="date" name="dateofBirth" value={formData.dateofBirth} onChange={handleChange} placeholder="Enter date of birth" />
            
            <button onClick={nextStep}>Next</button>
            
        </div>
    );
}

export default PersonalInfo