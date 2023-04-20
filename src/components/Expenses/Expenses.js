import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {

  const [year, setYear] = useState("2021");

  const getYearHandler = (selectYear) => {
    setYear(selectYear);
  };
  
  const filteredExpenses = props.expense.filter((expe) => {
    return expe.date.getFullYear().toString() === year;
  });

  // let filteredExpenses = props.expense;
  
  console.log(filteredExpenses);
  
  return (
    <div>
      <Card className="expense">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesFilter selectedYear={year} onGetYear={getYearHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
