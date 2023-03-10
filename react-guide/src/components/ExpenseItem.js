import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  // curly braces to execute the javascript command
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
