import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedyear, setYear] = useState("2020");

  const changeYearhandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedyear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedyear}
        onChangeFilter={changeYearhandler}
      />

      <ExpensesChart expenses={filterExpenses} />

      <ExpensesList expensesList={filterExpenses} />

      {/* splitting tarnery oprator */}
      {/* {filterExpenses.length === 0 && <p>No Records found !</p>} */}
      {
        // filterExpenses.length > 0 &&
        //   // {/* dynamic creating of multiple components */}
        //   filterExpenses.map((expense) => (
        //     <ExpenseItem
        //       key={expense.id}
        //       title={expense.title}
        //       date={expense.date}
        //       amount={expense.amount}
        //     />
        //   ))
      }

      {/* <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
