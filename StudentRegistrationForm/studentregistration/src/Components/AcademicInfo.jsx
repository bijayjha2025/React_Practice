
import React from "react";

const AcademicInfo = ({formData, handleChange, nextStep, prevStep}) => {
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

            <label>Year:</label>
            <select name="year" value={formData.year} onChange={handleChange}>
                <option value="">Select Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
            </select>

            <div>
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>

        </div>
    );
}

export default AcademicInfo