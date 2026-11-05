
// =======================================
// SPENDWISE - INTERACTIVE BUDGET TRACKER
// =======================================

// 1. APPLICATION DATA

let monthlyBudget = 0;

// Array for storing multiple expense records
let expenses = [];


// 2. SELECT HTML ELEMENTS

const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");

const budgetInput = document.getElementById("monthly-budget");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

const budgetDisplay = document.getElementById("budget-display");
const expensesDisplay = document.getElementById("expenses-display");
const balanceDisplay = document.getElementById("balance-display");

const expenseList = document.getElementById("expense-list");
const feedbackMessage = document.getElementById("feedback-message");


// 3. BUDGET CALCULATION FUNCTIONS

function calculateTotalExpenses() {
    let total = 0;

    // Loop through all expense records
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses();
}


// 4. MAKE BUDGET DECISIONS

function checkBudgetStatus() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateRemainingBalance();

    if (monthlyBudget <= 0) {
        return "Please set your monthly budget.";
    } else if (remainingBalance < 0) {
        return "Warning: You have exceeded your budget!";
    } else if (totalExpenses === monthlyBudget) {
        return "You have used your entire budget.";
    } else if (totalExpenses >= monthlyBudget * 0.8) {
        return "Warning: You have used 80% or more of your budget.";
    } else {
        return "Good work! You are within your budget.";
    }
}


// 5. DISPLAY BUDGET INFORMATION

function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateRemainingBalance();

    budgetDisplay.textContent =
        "KSh " + monthlyBudget.toFixed(2);

    expensesDisplay.textContent =
        "KSh " + totalExpenses.toFixed(2);

    balanceDisplay.textContent =
        "KSh " + remainingBalance.toFixed(2);

    feedbackMessage.textContent = checkBudgetStatus();

    renderExpenses();
}


// 6. DISPLAY EXPENSE RECORDS USING A LOOP

function renderExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = `
            <tr>
                <td colspan="4">No expenses recorded yet.</td>
            </tr>
        `;
        return;
    }

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            "KSh " + expense.amount.toFixed(2);

        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Event listener for deleting an expense
        deleteButton.addEventListener("click", function () {
            deleteExpense(expense.id);
        });

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);

        expenseList.appendChild(row);
    }
}


// 7. ADD A NEW EXPENSE

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (name === "" || !Number.isFinite(amount) ||
        amount <= 0 || category === "") {
        feedbackMessage.textContent =
            "Please enter valid expense information.";
        return;
    }

    // Store a new record in the expenses array
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    // Update webpage after adding expense
    updateDashboard();

    feedbackMessage.textContent =
        "Expense added successfully!";

    expenseForm.reset();
});


// 8. SET MONTHLY BUDGET

budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        feedbackMessage.textContent =
            "Please enter a valid monthly budget.";
        return;
    }

    monthlyBudget = enteredBudget;

    updateDashboard();

    feedbackMessage.textContent =
        "Monthly budget updated successfully!";
});


// 9. DELETE AN EXPENSE

function deleteExpense(expenseId) {
    expenses = expenses.filter(function (expense) {
        return expense.id !== expenseId;
    });

    updateDashboard();

    feedbackMessage.textContent =
        "Expense deleted successfully.";
}


// 10. INITIAL DASHBOARD DISPLAY

updateDashboard();

console.log("SpendWise JavaScript application loaded successfully.");
