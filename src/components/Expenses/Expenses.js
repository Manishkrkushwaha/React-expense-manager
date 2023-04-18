import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(2019);

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const getYearHandler = (selectYear) => {
    setYear(selectYear);
  };

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
