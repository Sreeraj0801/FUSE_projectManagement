import { useDispatch } from "react-redux";
import auth from "../API/baseURL";
import { setDetails } from "../Redux/Slice/userSlice";

function useRefreshToken() {
  const dispatch = useDispatch();
  const refresh = async () => {
    console.log("inside refresh");
    try {
      const response = await auth.get("/token");
      const accessToken = response.data;
      dispatch(setDetails({ accessToken: accessToken }));
      return accessToken;
    } catch (error) {
       console.log("From useRefreshtoken",error);
    }
  };
  return refresh;
}

export default useRefreshToken;