import { employees, selected } from "./EmployeeGrid";

export default function userInfo() {
  //   const selectedEmployee = employees()?.find(
  //     (employee) => employee.id == selected()
  //   );

  //   const selectedEmployee = () =>
  //     employees()?.find((employee) => employee.id == selected());

  return (
    <ul>
      <li>{selectedEmployee?.gender}</li>
    </ul>
  );
}
