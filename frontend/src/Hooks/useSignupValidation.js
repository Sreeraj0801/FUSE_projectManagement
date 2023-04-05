import { useState } from "react"


const useSignupValidation = ()=>{

    const [errors,setErrors] = useState({
        name :"",
        email:"",
        mobile:"",
        pword:"",
        confirmPword:""
    })

    const [signupFormData,setSignupFormData] = useState({
        name:'',
        email:'',
        mobile:'',
        pword:'',
        confirmPword:''
    })
    

    const containSpecialCharacters = (string)=>{
        return !/^[a-zA-Z\s]+$/.test(string)
    }

    const isValidEmail = (string)=>{
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const isValidMobile = (string)=>{
        return /^[6-9]\d{9}$/.test(string)
    }

    const passLength = (string)=>{
        return string.length >= 6
    }   

    const handleInputChange = (e)=>{
        let error;
        const {name, value} = e.target
        
        switch(name) {
            case 'name':
              if(!value.trim()) {
                error = `${name} is required`;
              } else if(containSpecialCharacters(value)) {
                error = "No special characters allowed";
              }
              break;
            case 'email':
              if(!value.trim()) {
                error = `${name} is required`;
              } else if(!isValidEmail(value)) {
                error = "Invalid email address";
              }
              break;
            case 'mobile':
              if(!value.trim()) {
                error = `${name} is required`;
              } else if(!isValidMobile(value)) {
                error = "Invalid mobile number";
              }
              break;
            case 'pword':
              if(!value.trim()) {
                error = `${name} is required`;
              } else if(!passLength(value)) {
                error = "Should contain at least 6 characters";
              }
              break;
            case 'confirmPword':
              if(!value.trim()) {
                error = `${name} is required`;
              } else if(signupFormData.pword !== value) {
                error = "Password does not match";
              }
              break;
            default:
              error = `${name} is not a valid field`;
          }
          

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
        
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(signupFormData)
    }


    const isValidForm = async(e)=>{
        e.preventDefault()
        let status = true
        for(const key in signupFormData){
            if(signupFormData[key].length == 0 || errors[key]!=undefined){
                status = false
                break;
            }
        }
        return status
    }

    return {errors,signupFormData,handleInputChange,isValidForm}
    
}

export default useSignupValidation