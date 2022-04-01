import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  //   //single state variable
  //   const [userData, setUserdata] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    // //one way to do it
    // setUserdata({
    //   ...userData,
    //   title: event.target.value,
    // });
    // //valid approach
    // setUserdata((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
    // console.log(userData);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancleExpenseData}>
            Cancle
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
