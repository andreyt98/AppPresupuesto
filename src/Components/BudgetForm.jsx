import { useContext } from "react";
import { Context } from "../context/Context";
function BudgetForm() {
  const { budget, setBudget } = useContext(Context);
  function handleSubmit(e) {
    e.preventDefault();
    if (budget) {
      setBudget({ ...budget, ready: true });
    }
  }
  return (
    <section>
      <p>Presupuesto inicial</p>
      <form
        className="budget-form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          value={budget.value}
          onChange={(event) => {
            setBudget({ value: event.target.value });
          }}
          className="input"
          type="number"
          name=""
          id="1"
          min={1}
          placeholder="Ingresa un numero..."
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </section>
  );
}

export default BudgetForm;
