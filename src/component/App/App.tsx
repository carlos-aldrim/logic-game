import React from "react";
import { Router } from "../Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JokenpoGameProvider, SnakeGameProvider } from "contexts";
import { AudioMusic } from "component";

export const App: React.FC = () => {

  return (
    <AudioMusic>
      <JokenpoGameProvider>
        <SnakeGameProvider>
          <Router/>
          <ToastContainer />
        </SnakeGameProvider>
      </JokenpoGameProvider>
    </AudioMusic>
  );
};