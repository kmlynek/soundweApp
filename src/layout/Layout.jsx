import React from "react";
import { Outlet } from "react-router-dom";
import NavTab from "../components/NavTab";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Layout = () => {
  return (
    <div className="layout">
      <NavTab />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
