
import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo.jsx';

const RegistrationForm = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        dateofBirth: "",
        studentId: "",
        department: "",
        year: ""
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
            {
                step === 1 && (
                    <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}/>
                ) }
        </div>
    );
}

export default RegistrationForm