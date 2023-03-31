import axios  from "axios";


const privateInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials:true,
});


export default privateInstance ;


