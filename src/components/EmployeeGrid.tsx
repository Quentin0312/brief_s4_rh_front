import { For, createEffect, createResource, createSignal } from "solid-js";
import { request } from "../utils";

export const [selected, setSelected] = createSignal<number>(-1);
export const [employees, setEmployees] = createSignal<
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

createEffect(() => console.log("selected()", selected()));

export default function EmployeeGrid() {
  const [employees] = createResource(employeeGridRequest);

  return (
    <tbody>
      <For each={employees()}>
        {(employee) => (
          <tr>
            <td>
              <a onClick={() => setSelected(employee.id)}>
                {employee.first_name}
              </a>
            </td>
            <td>
              <a onClick={() => setSelected(employee.id)}>
                {employee.last_name}
              </a>
            </td>
            {/* <td>
              <a onClick={() => setSelected(employee.id)}>
                {employee.email_pro}
              </a>
            </td> */}
          </tr>
        )}
      </For>
    </tbody>
  );
}
