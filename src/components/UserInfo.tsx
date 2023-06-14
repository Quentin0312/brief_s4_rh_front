import { Formater, request } from "../utils";
import { employees } from "./EmployeeGrid";

export const getSelectedEmployee = () => {
  // verif undefined et return "no employee selected" ??
  return employees()?.find((employee) => employee.selected() == true);
};

function handleDeletion(idEmployee: number | undefined) {
  //fetch
  if (!idEmployee) {
    return;
  }

  // TODO: refactor url => always the same !
  // TODO: créer un type pour les méthodes de requêtes
  // TODO: ajouter .then(fetchEmployee) pour garder sync
  const fetchDeleteEmployee = async () =>
    (await request("api/employee", "DELETE", Formater({ id: idEmployee })))
      .json()
      .then((res) => console.log(res));
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
        <button onClick={() => handleDeletion(getSelectedEmployee()?.id)}>
          Supprimer l'employé
        </button>
      </ul>
    </>
  );
}
