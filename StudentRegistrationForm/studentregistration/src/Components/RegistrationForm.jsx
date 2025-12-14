
import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo.jsx';
import AcademicInfo from './AcademicInfo.jsx';
import AccountSetup from './AccountSetup.jsx';
import ReviewSubmit from './ReviewSubmit.jsx'

const RegistrationForm = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        dateofBirth: "",
        studentId: "",
        department: "",
        year: "",
        username: "",
        password: "",
        confirmPassword: ""
        });

        const handleChange= (e) =>{
            const {name, value} = e.target;
            setFormData({...formData, [name]: value});
        }

        const nextStep = () =>{
            setStep(prevStep => prevStep + 1);
        }

        const prevStep = () =>{
            setStep(prevStep => prevStep -1);
        }

    const handleSubmit = () => {
        console.log("Completed", formData);
        alert("Successful");

        setFormData({
            name: "",
            email: "",
            phone: "",
            dateofBirth: "",
            studentId: "",
            department: "",
            year: "",
            username: "",
            password: "",
            confirmPassword: ""
        });
        setStep(1);
    };


    return(
        <div>
            { step === 1 && ( <PersonalInfo formData={formData} handleChange={handleChange} nextStep={nextStep}/>)}
            { step === 2 && ( <AcademicInfo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>)}
            { step === 3 && ( <AccountSetup formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>)}
            { step === 4 && ( <ReviewSubmit formData={formData} prevStep={() => setStep(prevStep => prevStep -1 )} handleSubmit = {handleSubmit}/>)}
        </div>
    );
}

export default RegistrationForm