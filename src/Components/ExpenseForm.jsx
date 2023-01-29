const ExpenseForm = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();

  }
  return (
    <section>
      <p>Agrega los gastos</p>
      <form className="expense-form" onSubmit={ e => {handleSubmit(e)}}>
        <input type="text" name="" className="input" id="" placeholder="Nombre" required />

        <input type="number" className="input" name="" id="" placeholder="Costo" required />
        <input type="date" name="" id="" required />
        <button type="submit">Agregar</button>
      </form>
    </section>
  );
};

export default ExpenseForm;
