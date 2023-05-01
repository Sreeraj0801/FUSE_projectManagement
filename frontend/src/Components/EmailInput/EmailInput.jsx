/* eslint-disable react/prop-types */
import React,{ useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { toast ,ToastContainer} from 'react-toastify';

const EmailInput = ({ onSubmit }) => {
  const [tags, setTags] = useState([]);

  const handleTagChange = (tags) => {
    setTags(tags);
  };

  const handleSubmit = () => {
      if(validate && tags.length){
        onSubmit(tags);
      }else{
        toast.error("Please make a valid email");
      }
    

    
  };

  const isEmail = (email) => {
    // This regular expression matches most email address formats.
    // However, it may not match every possible email address.
    // Use a more robust email validation library if necessary.
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const renderTag = ({ tag, key, disabled, onRemove }) => (
    <div key={key} className={`bg-${disabled ? 'gray-400' : 'blue-500 '} text-white rounded-lg py-1 px-2 mt-2 mr-2 inline-flex items-center `}>
      <span className=''>{tag}</span>
      {!disabled && (
        <button type="button" className="ml-2 text-sm font-extrabold focus:outline-none" onClick={() => onRemove(key)}>
          &times;
        </button>
      )}
    </div>
  );

  const validate = (tags) => {
    const invalidTags = tags.filter((tag) => !isEmail(tag));
    return invalidTags.length === 0;
  };

  return (
    <div className="flex flex-col space-y-2">
      <TagsInput 
      className='' 
      value={tags} 
      onChange={handleTagChange} 
      tagRender={renderTag} 
      inputProps={{ placeholder: 'Add multiple email addresses' ,className:"p-2 w-full text-slate-900 border border dark:border-none border-slate-400"}} />
      {!validate(tags) && (
        <span className="text-red-500 text-sm">Please enter a valid email address.</span>
      )}
<div className='text-end'>
<button
        type="button"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 w-fit focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleSubmit}
        disabled={!validate(tags)}
      >
        Invite  Members
      </button>
</div>
<ToastContainer/>
    </div>
  );
};

export default EmailInput;
