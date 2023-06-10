import { For, createResource, createSignal } from "solid-js";
import { request } from "../utils";

const [employees, setEmployees] = createSignal<
  {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    phone: string;
    email_perso: string;
    email_pro: string;
  }[]
>();

const employeeGridRequest = async () =>
  (await request("api/employee", "GET", null))
    .json()
    .then((res) => setEmployees(res));

export default function EmployeeGrid() {
  const [employees] = createResource(employeeGridRequest);

  return (
    <For each={employees()}>
      {(employee) => (
        <>
          <tr>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email_pro}</td>
          </tr>
        </>
      )}
    </For>
  );
}
