import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message) => {
  toast.success(message, {
    style: {
      backgroundColor: "green",
      color: "white",
      fontSize: "16px",
      padding: "16px",
      width: "400px",
    },
    position: "bottom-center",
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    style: {
      backgroundColor: "red",
      color: "white",
      fontSize: "16px",
      padding: "16px",
      width: "400px",
    },
    position: "bottom-center",
  });
};
