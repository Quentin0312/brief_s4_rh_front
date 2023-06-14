import type { Component } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid from "./components/EmployeeGrid";
import UserInfo from "./components/UserInfo";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <div class="grid grid-cols-2 gap-4">
        <EmployeeGrid />
        <UserInfo />
      </div>
      {/* SWITCH <UserInfo /> ET <AddUser /> */}
    </>
  );
};

export default App;
