import { type Component, Switch, Match } from "solid-js";
import Navbar from "./components/navbar";
import EmployeeGrid, {
  deselectEmployee,
  employees,
} from "./components/EmployeeGrid";
import EmployeeInfo, { getSelectedEmployee } from "./components/EmployeeInfo";
import AddEmployee from "./components/AddEmployee";
import ModifyEmployee, {
  getModifiyngEmployee,
} from "./components/ModifyEmployee";

const App: Component = () => {
  return (
    <>
      <Navbar />

      <button
        class="btn btn-neutral"
        onClick={() => {
          deselectEmployee(employees());
        }}
      >
        Ajouter un employé
      </button>

      <div class="grid grid-cols-2">
        <div class="flex justify-center">
          <EmployeeGrid />
        </div>
        <Switch fallback={<AddEmployee />}>
          <Match when={getSelectedEmployee()}>
            <EmployeeInfo />
          </Match>
          <Match when={getModifiyngEmployee()}>
            <ModifyEmployee />
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default App;
