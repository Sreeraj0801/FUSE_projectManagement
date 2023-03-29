import Swal from "sweetalert2";

const SuccessAlert = (data,heading) => {
  Swal.fire({
    icon: "success",
    title: `${heading}`,
    text: `${data}`,
  });
  return null; // return null so that this component doesn't render anything
};

export default SuccessAlert;


