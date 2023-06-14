import { createSignal } from "solid-js";
import { Formater, request } from "../utils";

export default function AddEmployee() {
  const [lastName, setLastName] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [gender, setGender] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [mailPro, setMailPro] = createSignal("");
  const [mailPerso, setMailPerso] = createSignal("");

  function handleSubmit() {
    // console.log(lastName(), firstName(), gender());
    const data = {
      first_name: firstName(),
      last_name: lastName(),
      gender: gender(),
      phone: phone(),
      email_pro: mailPro(),
      email_perso: mailPerso(),
    };
    // TODO .then(afficher pop up ET fetch pour remplir setEMployee et garder la sync des datas)
    request("POST", Formater(data));
  }

  return (
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
  );
}
