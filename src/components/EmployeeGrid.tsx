import { Accessor, For, Setter, createSignal, onMount } from "solid-js";
import { MethodEnum, request } from "../utils";

type EmployeeType = {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  phone: string;
  email_perso: string;
  email_pro: string;
  selected: Accessor<boolean>;
  setSelected: Setter<boolean>;
};

export const [employees, setEmployees] = createSignal<EmployeeType[]>([]);

function selectEmployee(employees: EmployeeType[], targetIdEmployee: number) {
  for (const employee of employees) {
    // console.log("employee", employee);

    if (employee.id == targetIdEmployee) {
      employee.setSelected((previousBool) =>
        previousBool ? previousBool : true
      );
    } else {
      employee.setSelected((previousBool) =>
        previousBool ? false : previousBool
      );
    }
  }
}

export function deselectEmployee(employees: EmployeeType[]) {
  for (const employee of employees) {
    employee.setSelected((previousBool) =>
      previousBool ? false : previousBool
    );
  }
}

export const employeeGridRequest = async () =>
  (await request(MethodEnum.get, null)).json().then((res) => {
    res = res.map((employee: EmployeeType) => {
      const [selected, setSelected] = createSignal(false);
      const employeeInfo = { ...employee, selected, setSelected };

      return employeeInfo;
    });

    setEmployees(res);
  });

export default function EmployeeGrid() {
  onMount(() => employeeGridRequest());

  return (
    <table>
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
  );
}
