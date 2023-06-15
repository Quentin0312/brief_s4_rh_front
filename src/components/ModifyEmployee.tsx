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
  // TODO: Refactor !!
  return (
    <div class="flex justify-center">
      <div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={lastName()}
            onInput={(e) => setLastName(e.target.value)}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nom
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={firstName()}
            onInput={(e) => setFirstName(e.target.value)}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Prénom(s)
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={phone()}
              onInput={(e) => setPhone(e.target.value)}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Téléphone
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={gender()}
              onInput={(e) => setGender(e.target.value)}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Genre
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={mailPerso()}
              onInput={(e) => setMailPerso(e.target.value)}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Mail perso
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={mailPro()}
              onInput={(e) => setMailPro(e.target.value)}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Mail pro
            </label>
          </div>
        </div>
        <a
          class="btn btn-neutral"
          style={{ cursor: "pointer" }}
          onClick={handleSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
}
