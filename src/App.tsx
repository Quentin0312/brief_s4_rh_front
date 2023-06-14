import { Show, type Component } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid, {
  deselectEmployee,
  employees,
} from "./components/EmployeeGrid";
import UserInfo, { getSelectedEmployee } from "./components/UserInfo";
import AddEmployee from "./components/AddEmployee";

const App: Component = () => {
  return (
    <>
      <Navbar />

      <button
        onClick={() => {
          deselectEmployee(employees());
        }}
      >
        Ajouter un employé
      </button>

      <div class="grid grid-cols-2 gap-4">
        <EmployeeGrid />

        <Show when={getSelectedEmployee()} fallback={<AddEmployee />}>
          <UserInfo />
        </Show>
      </div>
    </>
  );
};

export default App;
