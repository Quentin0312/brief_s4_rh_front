import { deselectEmployee, employees } from "./EmployeeGrid";

export default function Navbar() {
  return (
    <nav
      class="w-full text-center text-xl flex justify-center items-center relative pt-10 pb-16"
      style="height: 64px"
    >
      <button
        class="btn btn-outline absolute left-10"
        onClick={() => {
          deselectEmployee(employees());
        }}
      >
        Ajouter un employé
      </button>
      <a class="text-center text-xl text-slate-300 tracking-[.40em]">
        My RH Solution
      </a>
    </nav>
  );
}
