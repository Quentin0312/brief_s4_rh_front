import type { Component } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid from "./components/EmployeeGrid";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <EmployeeGrid />
      {/* SWITCH <UserInfo /> ET <AddUser /> */}
    </>
  );
};

export default App;
