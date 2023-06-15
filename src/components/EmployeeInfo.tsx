import { MethodEnum, request } from "../utils";
import { StatusEnum, employeeGridRequest, employees } from "./EmployeeGrid";

export const getSelectedEmployee = () => {
  return employees()?.find(
    (employee) => employee.status() === StatusEnum.selected
  );
};

function handleDeletion(idEmployee: number | undefined) {
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

export default function EmployeeInfo() {
  return (
    <div class="grid grid-cols-1 h-96">
      {/* INFO */}
      <div class="w-3/4">
        <div class="overflow-x-auto">
          <table class="table">
            <tbody>
              <tr>
                <th>Prénom(s)</th>
                <td>{getSelectedEmployee()?.first_name}</td>
              </tr>
              <tr>
                <th>Nom</th>
                <td>{getSelectedEmployee()?.last_name}</td>
              </tr>
              <tr>
                <th>Sexe</th>
                <td>{getSelectedEmployee()?.gender}</td>
              </tr>
              <tr>
                <th>Téléphone</th>
                <td>{getSelectedEmployee()?.phone}</td>
              </tr>
              <tr>
                <th>Mail perso</th>
                <td>{getSelectedEmployee()?.email_perso}</td>
              </tr>
              <tr>
                <th>Mail pro</th>
                <td>{getSelectedEmployee()?.email_pro}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BUTTONS */}
      <div class="grid grid-cols-2">
        <button
          class="btn btn-neutral m-5"
          onClick={() => handleDeletion(getSelectedEmployee()?.id)}
        >
          Supprimer l'employé
        </button>
        {/* TODO: do the same of selectEmployee() pour robustesse (et refactor) */}
        <button
          class="btn btn-neutral m-5"
          onClick={() => getSelectedEmployee()?.setStatus(StatusEnum.modifying)}
        >
          Modifier l'employé
        </button>
      </div>
    </div>
  );
}
