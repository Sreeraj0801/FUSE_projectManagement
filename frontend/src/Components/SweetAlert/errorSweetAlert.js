import Swal from "sweetalert2";

const errorSweetAlert = (data) => {
    Swal.fire({
        icon: "error",
        title: "Verify to Register!",
        text: `${data}`,
      });
  return null
}

export default errorSweetAlert
