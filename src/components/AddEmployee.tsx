import { createSignal } from "solid-js";
import { MethodEnum, request } from "../utils";
import { employeeGridRequest } from "./EmployeeGrid";

export default function AddEmployee() {
  const [lastName, setLastName] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [gender, setGender] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [mailPro, setMailPro] = createSignal("");
  const [mailPerso, setMailPerso] = createSignal("");

  function handleSubmit() {
    const data = {
      first_name: firstName(),
      last_name: lastName(),
      gender: gender(),
      phone: phone(),
      email_pro: mailPro(),
      email_perso: mailPerso(),
    };
    // TODO: ajout feedback utilisateur
    const fetchAddEmployee = async () =>
      (await request(MethodEnum.post, data))
        .json()
        .then(() => employeeGridRequest());

    fetchAddEmployee();
  }

  return (
    // <div class="grid grid-cols-2">
    //   <label>Nom</label>
    //   <input
    //     type="text"
    //     value={lastName()}
    //     onInput={(e) => setLastName(e.target.value)}
    //     class="input input-bordered w-full max-w-xs"
    //   ></input>

    //   <label>Prénom</label>
    //   <input
    //     type="text"
    //     value={firstName()}
    //     onInput={(e) => setFirstName(e.target.value)}
    //   ></input>

    //   <label>Sexe</label>
    //   <input
    //     type="text"
    //     value={gender()}
    //     onInput={(e) => setGender(e.target.value)}
    //   ></input>

    //   <label>Téléphone</label>
    //   <input
    //     type="text"
    //     value={phone()}
    //     onInput={(e) => setPhone(e.target.value)}
    //   ></input>

    //   <label>Mail pro</label>
    //   <input
    //     type="text"
    //     value={mailPro()}
    //     onInput={(e) => setMailPro(e.target.value)}
    //   ></input>

    //   <label>Mail perso</label>
    //   <input
    //     type="text"
    //     value={mailPerso()}
    //     onInput={(e) => setMailPerso(e.target.value)}
    //   ></input>
    //   <button onClick={handleSubmit}>Enregistrer</button>
    // </div>

    <form>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          value={lastName()}
          onInput={(e) => setLastName(e.target.value)}
          // name="floating_email"
          // id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          // for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nom
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          value={firstName()}
          onInput={(e) => setFirstName(e.target.value)}
          // name="floating_password"
          // id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          // for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Prénom(s)
        </label>
      </div>
      {/* <div class="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm password
        </label>
      </div> */}
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={phone()}
            onInput={(e) => setPhone(e.target.value)}
            // name="floating_first_name"
            // id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Téléphone
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={gender()}
            onInput={(e) => setGender(e.target.value)}
            // name="floating_last_name"
            // id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
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
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            // name="floating_phone"
            // id="floating_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mail perso
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            value={mailPro()}
            onInput={(e) => setMailPro(e.target.value)}
            // name="floating_company"
            // id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mail pro
          </label>
        </div>
      </div>
      <a
        // type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ cursor: "pointer" }}
        onClick={handleSubmit}
      >
        Submit
      </a>
    </form>
  );
}
