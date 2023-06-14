import { createSignal, onMount } from "solid-js";
import { StatusEnum, employeeGridRequest, employees } from "./EmployeeGrid";
import { MethodEnum, request } from "../utils";

export function getModifiyngEmployee() {
  return employees()?.find(
    (employee) => employee.status() === StatusEnum.modifying
  );
}

// TODO: utiliser un store ??
const [lastName, setLastName] = createSignal("");
const [firstName, setFirstName] = createSignal("");
const [gender, setGender] = createSignal("");
const [phone, setPhone] = createSignal("");
const [mailPro, setMailPro] = createSignal("");
const [mailPerso, setMailPerso] = createSignal("");

// TODO: refactor ?
function handleSubmit() {
  const data = {
    id: getModifiyngEmployee()?.id,
    first_name: firstName(),
    last_name: lastName(),
    gender: gender(),
    phone: phone(),
    email_pro: mailPro(),
    email_perso: mailPerso(),
  };
  // TODO: ajout feedback utilisateur
  const fetchModifyEmployee = async () =>
    (await request(MethodEnum.put, data))
      .json()
      .then(() => employeeGridRequest());

  fetchModifyEmployee();
}

export default function ModifyEmployee() {
  onMount(() => {
    const modifyingEmployee = getModifiyngEmployee();

    if (!modifyingEmployee) {
      return;
    }

    setLastName(modifyingEmployee.last_name);
    setFirstName(modifyingEmployee.first_name);
    setGender(modifyingEmployee.gender);
    setPhone(modifyingEmployee.phone);
    setMailPro(modifyingEmployee.email_pro);
    setMailPerso(modifyingEmployee.email_perso);
    // console.log("firstName()", firstName());
  });

  return (
    <>
      {/* TODO: en faire un subComponent */}
      <div class="grid grid-cols-2">
        <label>Nom</label>
        <input
          type="text"
          value={lastName()}
          onInput={(e) => setLastName(e.target.value)}
        ></input>

        <label>Prénom</label>
        <input
          type="text"
          value={firstName()}
          onInput={(e) => setFirstName(e.target.value)}
        ></input>

        <label>Sexe</label>
        <input
          type="text"
          value={gender()}
          onInput={(e) => setGender(e.target.value)}
        ></input>

        <label>Téléphone</label>
        <input
          type="text"
          value={phone()}
          onInput={(e) => setPhone(e.target.value)}
        ></input>

        <label>Mail pro</label>
        <input
          type="text"
          value={mailPro()}
          onInput={(e) => setMailPro(e.target.value)}
        ></input>

        <label>Mail perso</label>
        <input
          type="text"
          value={mailPerso()}
          onInput={(e) => setMailPerso(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Enregistrer</button>
      </div>
    </>
  );
}
