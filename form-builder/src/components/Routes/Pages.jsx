import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import CreateForm from "../CreateForm/CreateForm";
import Error from "../Error/Error";
import Login from "../login/Login";
const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create_form" element={<CreateForm />} />
      </Routes>
    </>
  );
};

export default Pages;
