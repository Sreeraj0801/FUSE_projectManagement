
import { useState } from 'react';
import { ClipboardEvent } from "react"

const useLoginValidation = () => {
    const [details,setDetails] = useState({
        credential:'',
        pword :''
    });
    const [errors,setErrors] = useState({
        credential:'',
        pword :''
    });

    const handleInputChange = async (e) => {
        let { name, value } = e.target;
        let error = '';
        if(name === 'credential') if(!value.trim()) error = "Field is required"
        else if(name === 'pword'){
            ClipboardEvent
            if(!value.trim()) error = "Need a password"
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
          }));

          setDetails((prevData) => ({
            ...prevData,
            [name]: value,
          }));
    }

    const [isValid,setIsValid] = useState(false); 
    const checkSubmit = async () => {
        for (const key in details) {
            if(details[key].trim()) setIsValid(true)
            else setIsValid(false)
          }
    }
    return {handleInputChange,checkSubmit,details,errors,isValid}

}

export default useLoginValidation ;
