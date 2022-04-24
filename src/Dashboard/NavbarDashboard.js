import React from "react";
import "./Dashboard.css";
import logo from "../assets/logo11.png";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <img src={logo} alt="test" />
      <ul className="dashboard-links">
        <li className="nav-item-dashboard">
          <NavLink to="/dashboard/addwriter" className={"nav-links "}>
            اضافة كاتب
          </NavLink>
        </li>

        <li className="nav-item-dashboard">
          <NavLink to="/dashboard/addarticle" className="nav-links">
            اضافة مقالة
          </NavLink>
        </li>

        <li className="nav-item-dashboard">
          <NavLink to="/articles" className={"nav-links "}>
            اضافة فيديو
          </NavLink>
        </li>
        <li className="nav-item-dashboard">
          <NavLink to="/papers" className="nav-links">
            اضافة ملخصات
          </NavLink>
        </li>
        <li className="nav-item-dashboard">
          <NavLink to="/writers" className="nav-links">
            تنسيق الرئيسية
          </NavLink>
        </li>
        <li className="nav-item-dashboard">
          <NavLink to="/tv" className="nav-links">
            تنسيق التلفاز
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;