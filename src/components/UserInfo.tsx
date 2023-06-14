import { MethodEnum, request } from "../utils";
import { StatusEnum, employeeGridRequest, employees } from "./EmployeeGrid";

export const getSelectedEmployee = () => {
  // verif undefined et return "no employee selected" ??
  console.log("employees()", employees());

  return employees()?.find(
    (employee) => employee.status() === StatusEnum.selected
  );
};

function handleDeletion(idEmployee: number | undefined) {
  //fetch
  if (!idEmployee) {
    return;
  }
  // TODO: ajout feedback utilisateur => suppression bien effectué
  const fetchDeleteEmployee = async () =>
    (await request(MethodEnum.delete, { id: idEmployee }))
      .json()
      .then(() => employeeGridRequest());
  fetchDeleteEmployee();
}

export default function userInfo() {
  return (
    <>
      <ul>
        <li>{getSelectedEmployee()?.first_name}</li>
        <li>{getSelectedEmployee()?.last_name}</li>
        <li>{getSelectedEmployee()?.gender}</li>
        <li>{getSelectedEmployee()?.phone}</li>
        <li>{getSelectedEmployee()?.email_perso}</li>
        <li>{getSelectedEmployee()?.email_pro}</li>
        <br />
        <button onClick={() => handleDeletion(getSelectedEmployee()?.id)}>
          Supprimer l'employé
        </button>
        <br />
        <button onClick={() => console.log("TODO")}>Modifier l'employé</button>
      </ul>
    </>
  );
}
