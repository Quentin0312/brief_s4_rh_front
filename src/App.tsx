import type { Component } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid from "./components/EmployeeGrid";
import UserInfo from "./components/UserInfo";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <EmployeeGrid />
      <UserInfo />
      {/* SWITCH <UserInfo /> ET <AddUser /> */}
    </>
  );
};

export default App;
