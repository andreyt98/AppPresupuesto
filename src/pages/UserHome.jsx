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
      <Navbar />
      {budget.ready || <BudgetForm />}

      {budget.ready && (
        <>
          <BudgetCard />
          <ExpenseForm />
        </>
      )}
    </section>
  );
};

export default UserHome;
