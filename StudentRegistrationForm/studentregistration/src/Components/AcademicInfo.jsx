
import React from "react";

const AcademicInfo = ({formData, handleChange, nextStep, previousStep}) => {
    return(
        <div>
            <h2>Step 2: Academic Information</h2>

            <label>Student ID:</label>
            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Enter student ID"/>

            <label>Department:</label>
            <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Computer">Computer Engineering</option>
            <option value="Industrial">Industrial Engineering</option>
            </select>


            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Enter student ID"/>

            <label>Student ID:</label>
            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Enter student ID"/>


        </div>
    );
}

export default AcademicInfo