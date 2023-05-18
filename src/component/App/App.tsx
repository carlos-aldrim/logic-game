import React from "react";
import { Router } from "../Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JokenpoGameProvider, SnakeGameProvider } from "contexts";

export const App: React.FC = () => {

  return (
    <div>
      <JokenpoGameProvider>
        <SnakeGameProvider>
          <Router/>
          <ToastContainer />
        </SnakeGameProvider>
      </JokenpoGameProvider>
    </div>
  );
};