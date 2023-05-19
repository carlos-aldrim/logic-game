import { toast } from "react-toastify";

export const useToast = () => {
  const handleToastSnake = (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: {
        background: "green"
      },
      theme: "dark",
      icon: false,
    });
  };

  const handleToastJokenpo = (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: {
        background: "#f2e606"
      },
      theme: "dark",
      icon: false,
    });
  };

  return {
    handleToastSnake,
    handleToastJokenpo
  };
};
