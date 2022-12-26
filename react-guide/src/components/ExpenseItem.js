import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  // curly braces to execute the javascript command
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;