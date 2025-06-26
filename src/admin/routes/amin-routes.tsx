import type { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages";


export const AdminRoutes: FunctionComponent = () => {
  return (
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
  );
};
