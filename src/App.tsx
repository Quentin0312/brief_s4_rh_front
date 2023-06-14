import { Show, type Component } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid, {
  deselectEmployee,
  employees,
} from "./components/EmployeeGrid";
import UserInfo, { getSelectedEmployee } from "./components/UserInfo";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <a
        onClick={() => {
          deselectEmployee(employees());
        }}
      >
        Ajouter un employé
      </a>
      <div class="grid grid-cols-2 gap-4">
        <EmployeeGrid />
        <Show when={getSelectedEmployee()} fallback={<div>Form d'ajout</div>}>
          <UserInfo />
        </Show>
      </div>
    </>
  );
};

export default App;
