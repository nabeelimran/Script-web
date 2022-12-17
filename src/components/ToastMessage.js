import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ToastMessage = (message, type = undefined) => {
  Toastify({
    text: message,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: type ? "#98C33C" : "#dc3545",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function () {}, // Callback after click
  }).showToast();
};
