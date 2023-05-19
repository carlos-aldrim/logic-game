import React from "react";
import { Routes, Route } from "react-router-dom";
import { Snake, Home, PagesRoutes, Jokenpo } from "views";

export const Router: React.FC = () => {

  return (
    <Routes>
      <Route path={PagesRoutes.home} element={<Home />} />
      <Route path={PagesRoutes.gameSnake} element={<Snake />} />
      <Route path={PagesRoutes.jokenpo} element={<Jokenpo />} />
    </Routes>
  );
};
