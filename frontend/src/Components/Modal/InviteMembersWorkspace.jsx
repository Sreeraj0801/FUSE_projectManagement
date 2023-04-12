/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import EmailInput from "../EmailInput/EmailInput";
import { BsPersonFillAdd } from "react-icons/bs";
import workspaceApi from '../../API/workspaceApi';
import ModalLoader from './ModalLoader';
import SuccessAlert from '../SweetAlert/successAlert';
import { toast ,ToastContainer} from 'react-toastify';

const InviteMembersWorkspace = ({workSpaceId}) => {
    const [showModal, setShowModal] = useState(false);
    const [inviteLoader,setInviteLoader] = useState(false);
    const {addUserToWorkspace} = workspaceApi();
    
    const handleSubmit = async (tags) => {
        try {
          setInviteLoader(true);
           await addUserToWorkspace({workSpaceId, tags});
          setInviteLoader(false);
          SuccessAlert("Invitation send successfully","Invitation send")
          setShowModal(false)
        } catch (error) {
        console.log(error);
        toast.error("something went wrong")
        }
      };

    return (
        <>
          <button
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:flex gap-2'
            type="button"
            onClick={() => setShowModal(true)}
          >
            <BsPersonFillAdd className='text-3xl md:text-xl'/>
            <span className="hidden md:block">INVITE MEMBERS</span>
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg  relative flex flex-col  bg-white dark:bg-slate-800 outline-none focus:outline-none shadow-lg shadow-slate-300 dark:shadow-slate-900 w-full">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white ">Invite members to workspace </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div>
                    <div className="mx-10">
                <h1 className="text-xl text-center font-extrabold my-5">
                </h1>
                {inviteLoader&& <ModalLoader/>}
                <EmailInput onSubmit={handleSubmit} />

                <div className="text-center mt-10 ">

                </div>
              </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <ToastContainer/>
        </>
      );
}

export default InviteMembersWorkspace
