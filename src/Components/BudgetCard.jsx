import { useContext } from "react";
import { Context } from "../context/Context";

const BudgetCard = () => {
  const { budget, setBudget } = useContext(Context);
  const handleEdit = () => {
    setBudget({ value: budget.value, ready: false });
  };
  const handleDelete = () => {
    if (confirm("Realmente desea eliminar este presupuesto? También se eliminarán todos los gastos guardados...")) {
      setBudget({ value: null, ready: false });
    }
  };
  return (
    <div id="budget-card">
      <div className="budget">
        <h2>Presupuesto: <span>${budget.value}</span></h2>
        <div className="options">
          <i className="bi bi-pencil-fill" id="edit-product" onClick={handleEdit}></i>
          <i className="bi bi-trash3-fill" id="delete-product" onClick={handleDelete}></i>
        </div>
      </div>
      <div className="actions">
      <div className="fcol gastado">
        <h4>Total gastos:</h4>
        <p>$234</p>
        </div>
        <div className="fcol disponible">
        <h4>Dinero disponible:</h4>
        <p>$345</p>
        </div>
        
      </div>
    </div>
  );
};

export default BudgetCard;
