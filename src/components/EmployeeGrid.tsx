import { Accessor, For, Setter, createSignal, onMount } from "solid-js";
import { MethodEnum, request } from "../utils";

export enum StatusEnum {
  notSelected,
  selected,
  modifying,
}

type EmployeeType = {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  phone: string;
  email_perso: string;
  email_pro: string;
  status: Accessor<StatusEnum>;
  setStatus: Setter<StatusEnum>;
};

export const [employees, setEmployees] = createSignal<EmployeeType[]>([]);

function selectEmployee(employees: EmployeeType[], targetIdEmployee: number) {
  for (const employee of employees) {
    // console.log("employee", employee);

    if (employee.id == targetIdEmployee) {
      employee.setStatus((previousStatus: StatusEnum) =>
        previousStatus === StatusEnum.selected
          ? previousStatus
          : StatusEnum.selected
      );
    } else {
      // TODO: refactor
      employee.setStatus((previousStatus: StatusEnum) =>
        previousStatus === StatusEnum.notSelected
          ? previousStatus
          : StatusEnum.notSelected
      );
    }
  }
}
// rename setAllEmployeesToNotSelected
export function deselectEmployee(employees: EmployeeType[]) {
  for (const employee of employees) {
    // REFACTOR with setToNotSelectedStatusAux
    employee.setStatus((previousStatus: StatusEnum) =>
      previousStatus === StatusEnum.notSelected
        ? previousStatus
        : StatusEnum.notSelected
    );
  }
}

export const employeeGridRequest = async () =>
  (await request(MethodEnum.get, null)).json().then((res) => {
    res = res.map((employee: EmployeeType) => {
      const [status, setStatus] = createSignal(StatusEnum.notSelected);
      const employeeInfo = {
        ...employee,
        status,
        setStatus,
      };

      return employeeInfo;
    });

    setEmployees(res);
  });

export default function EmployeeGrid() {
  onMount(() => employeeGridRequest());
  return (
    <div class="grid grid-cols-1 h-4/6 w-3/4">
      <h1 class="text-center text-xl pb-12">Liste des employées</h1>
      <div class="overflow-x-auto ">
        <table class="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
            </tr>
          </thead>
          <tbody>
            <For each={employees()}>
              {(employee) => (
                <tr>
                  <td>
                    <button
                      onclick={() => selectEmployee(employees(), employee.id)}
                    >
                      {employee.first_name}
                    </button>
                  </td>
                  <td>
                    <button
                      onclick={() => selectEmployee(employees(), employee.id)}
                    >
                      {employee.last_name}
                    </button>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}
