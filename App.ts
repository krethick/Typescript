import {
    TransactionInfo,
    BasicExpense,
    IExpense,
    BusinessExpense,
    
} from "./ExpenseModule"

const expenses: BasicExpense[] = [];

const transactionLog: TransactionInfo[] = [];

function addExpense(expense:BasicExpense): void
{
    expenses.push(expense);
    const [date] = expense.transaction;
    transactionLog.push([date,expense.getSummary()]);
}

function getTotalExpenses(expenseList:BasicExpense[]):number
{
    return expenseList.reduce((total,exp) => total + exp.amount,0);
}

const e1 = new BasicExpense(
    "EXP001",
    1500,
    "Travel",
    ["2024-04-01", "Flight ticket to coimbatore"]
)

const e2 = new BasicExpense(
  "EXP002",
  800,
  "Food",
  ["2024-04-03", "Team lunch"]
);
 
// BusinessExpense instances
const b1 = new BusinessExpense(
  "BIZ001",
  5000,
  "Software",
  ["2024-04-05", "Annual subscription renewal"],
  "GST 18% applied — ₹900"
);
 
const b2 = new BusinessExpense(
  "BIZ002",
  12000,
  "Equipment",
  ["2024-04-07", "Laptop purchase for office"],
  "GST 12% applied — ₹1440"
);


addExpense(e1);
addExpense(e2);
addExpense(b1);
addExpense(b2);


expenses.forEach((exp) => console.log(exp.getSummary()));

transactionLog.forEach(([date,summary]) =>
{
    console.log(`Date: ${date}\n Summary: ${summary}\n`)
});

console.log(`${getTotalExpenses(expenses)}`);

// npx ts-node app.ts