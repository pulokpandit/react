import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowExpenseForm((prevState) => {
      return !prevState;
    });
  };

  const addExpenseClickHandler = () => {
    setShowExpenseForm((prevState) => {
      return !prevState;
    });
  };

  if (showExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancleExpenseData={addExpenseClickHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={addExpenseClickHandler}>Add Expense</button>
      </div>
    );
  }
};

export default NewExpense;
