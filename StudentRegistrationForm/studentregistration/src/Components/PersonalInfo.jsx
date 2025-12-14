
import React from "react";

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
    return (
        <div className="formContainer">
            <h2>Step 1: Personal Information</h2>
            
            <div className="field">
            <label>Full Name:</label>
            <input type="text" name="name" value={ formData.name} onChange={handleChange} placeholder="Enter full name" />
            </div>

            <div className="field">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
            </div>

            <div className="field">
            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
            </div>

            <div className="field">
            <label>Date of Birth:</label>
            <input type="date" name="dateofBirth" value={formData.dateofBirth} onChange={handleChange} placeholder="Enter date of birth" />
            </div>

            <div className="buttons">
            <button onClick={nextStep}>Next</button>
            </div>

        </div>
    );
}

export default PersonalInfo