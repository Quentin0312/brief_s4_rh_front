import { employees } from "./EmployeeGrid";

export const getSelectedEmployee = () => {
  // verif undefined et return "no employee selected" ??
  return employees()?.find((employee) => employee.selected() == true);
};

export default function userInfo() {
  return (
    <ul>
      <li>{getSelectedEmployee()?.first_name}</li>
      <li>{getSelectedEmployee()?.last_name}</li>
      <li>{getSelectedEmployee()?.gender}</li>
      <li>{getSelectedEmployee()?.phone}</li>
      <li>{getSelectedEmployee()?.email_perso}</li>
      <li>{getSelectedEmployee()?.email_pro}</li>
    </ul>
  );
}
