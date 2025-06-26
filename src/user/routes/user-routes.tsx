import type { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { Book ,Cart, Main } from "../pages";
import { Header } from "../components";

export const UserRoutes: FunctionComponent = () => {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
    </>
  );
};
