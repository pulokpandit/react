import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expensesList.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
