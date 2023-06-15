import { deselectEmployee, employees } from "./EmployeeGrid";

export default function Navbar() {
  return (
    <nav
      class="w-full text-center text-xl flex justify-center items-center relative"
      style="height: 64px"
    >
      <button
        class="btn btn-outline absolute left-0"
        onClick={() => {
          deselectEmployee(employees());
        }}
      >
        Ajouter un employé
      </button>
      <a class="text-center text-black tracking-[.20em]">My RH Solution</a>
    </nav>
  );
}
