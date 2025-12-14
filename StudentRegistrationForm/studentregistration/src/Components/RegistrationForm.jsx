
import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo.jsx';
import AcademicInfo from './AcademicInfo.jsx';
import AccountSetup from './AccountSetup.jsx';

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
    return(
        <div>
            { step === 1 && ( <PersonalInfo formData={formData} handleChange={handleChange} nextStep={nextStep}/>)}
            { step === 2 && ( <AcademicInfo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>)}
            { step === 3 && ( <AccountSetup formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>)}
        </div>
    );
}

export default RegistrationForm