import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../layouts/AdminNavbar";

function AdminRoot() {
  return (
    <div>
      <AdminNavbar />

      <Outlet />
    </div>
  );
}

export default AdminRoot;
