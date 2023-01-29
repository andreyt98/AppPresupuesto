import { useContext } from "react";
import BudgetCard from "../Components/BudgetCard";
import BudgetForm from "../Components/BudgetForm";
import ExpenseForm from "../Components/ExpenseForm";
import Navbar from "../Components/Navbar";
import { Context } from "../context/Context";
const UserHome = () => {
  const { user, budget } = useContext(Context);

  return (
    <section className="user-home">
      <Navbar></Navbar>
      {budget.ready || <BudgetForm></BudgetForm>}

      {budget.ready && (
        <>
          <BudgetCard></BudgetCard>
          <ExpenseForm></ExpenseForm>
        </>
      )}
    </section>
  );
};

export default UserHome;
