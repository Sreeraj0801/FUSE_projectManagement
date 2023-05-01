import {useNavigate} from 'react-router-dom'
import {auth,provider} from  './config'
import {signInWithPopup} from 'firebase/auth'
import axiosInstance from '../API/baseURL';
import {toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import {setDetails} from '../Redux/Slice/userSlice'
import {RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'


const userAuth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const googleAuthUserSignUp = async()=>{
    signInWithPopup(auth,provider).then(async(data)=>{
    try {
      const userDetails = {displayName: data.user.displayName , email : data.user.email}
      const response =  await axiosInstance.post('/googleRegistration',userDetails);
      if(response.data) {
          const {email,name,_id} = response.data ;
          dispatch(setDetails({name,email,accessToken:response?.data?.accessToken,userId:_id}));
          navigate('/home')
      }
    } catch (error) {
      if((error.response?.data?.error?.msg)){
        toast.error((error.response.data.error.msg))
      }
      else{console.log(error)}
    }
  })}

  const googleSignIn = async () =>{
    signInWithPopup(auth,provider).then(async(data) => {
      try {
        const response = await axiosInstance.post('/googleSignIn',{email:data.user.email});        
        if(response?.data?.response){
          const {email,name,_id} = response.data.response ;   
            dispatch(setDetails({name,email,accessToken:response?.data?.accessToken,userId:_id}));
            navigate('/home')
        }
      } catch (error) {
        if(error.response.data.error.msg){
          toast.error(error.response.data.error.msg)
        }else {
          console.log(error)
        }
      }
    })
  }

  const setUpRecapthcha = (number) =>{
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaVerifier)
}

  return {googleAuthUserSignUp,googleSignIn,setUpRecapthcha}
}

export default userAuth;

