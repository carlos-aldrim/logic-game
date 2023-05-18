import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Snake, Home, PagesRoutes, Jokenpo } from "views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home/>}
        />
        <Route
          path={PagesRoutes.gameSnake}
          element={<Snake/>}
        />
        <Route
          path={PagesRoutes.jokenpo}
          element={<Jokenpo/>}
        />
      </Routes>
    </BrowserRouter>
  );
};