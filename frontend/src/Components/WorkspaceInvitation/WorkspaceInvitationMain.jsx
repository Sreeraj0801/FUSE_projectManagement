import React, { useEffect } from "react";
import workspaceApi from "../../API/workspaceApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../../Redux/Slice/userSlice";
import BarsLoader from "../Loders/BarsLoader";

function WorkspaceInvitationMain() {
  const navigate = useNavigate();
  const { workspaceId, email, choice } = useParams();
  const dispatch = useDispatch();
  console.log(workspaceId, email, choice);
  const { verifyWorkspaceInvitationMail } = workspaceApi();
  const doWorkspaceVerification = async (workspaceId, email, choice) => {
    try {
      const response = await verifyWorkspaceInvitationMail(
        workspaceId,
        email,
        choice
      );
      if (response) {
        const { _id, name, email } = response.data.response;
        dispatch(
          setDetails({
            userId: _id,
            name,
            email,
            accessToken: response.data.accessToken,
          })
        );
        navigate("/home");
      }
    } catch (error) {
      if (error.msg === "User not registered") {
        navigate("/signup");
      }
    }
  };
  useEffect(() => {
    doWorkspaceVerification(workspaceId, email, choice);
  }, []);
  return <BarsLoader />;
}

export default WorkspaceInvitationMain;
