
import React from "react";

const ReviewSubmit = ({ formData, prevStep, handleSubmit }) => {
    return(
        <div className="formContainer">
            <h2>Review and Submit</h2>

            <h3>Personal Information</h3>
            <p><strong>Full Name:</strong>{formData.name}</p>
            <p><strong>Email:</strong>{formData.email}</p>
            <p><strong>Phone:</strong>{formData.phone}</p>
            <p><strong>Date of Birth:</strong>{formData.dateofBirth}</p>

            <h3>Academic Information</h3>
            <p><strong>Student ID:</strong>{formData.studentId}</p>
            <p><strong>Department:</strong>{formData.department}</p>
            <p><strong>Year:</strong>{formData.year}</p>

            <h3>Account Information</h3>
            <p><strong>Username:</strong>{formData.username}</p>
            <p><strong>Password:</strong> ******** (hidden)</p>

            <div className="buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    );

};

export default ReviewSubmit