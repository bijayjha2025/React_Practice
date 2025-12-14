
import React, {useState} from "react";

const AccountSetup = ({ formData, handleChange, nextStep, prevStep }) => {

    const [error, setError] = useState("");

    const handleNext = () => {

        if (!formData.username || !formData.password || !formData.confirmPassword){
            setError("All fields are required");
            return;
        }

        if (formData.password !== formData.confirmPassword){
            setError("Passwords need to be same");
            return;
        }

        setError("");
        nextStep();
    };

    return(
        <div>
            <h2>Step 3: Account Setup</h2>

            <div className="field">
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Choose a username"/>
            </div>

            <div className="field">
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password"/>
            </div>

            <div className="field">
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter Password"/>
            </div>

            { error && <p>{error}</p> }

            <div>
                <button onClick={prevStep}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        
        </div>
    );
};

export default AccountSetup