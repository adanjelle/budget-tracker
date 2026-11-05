
// =====================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// =====================================

// 1. Store application data
let monthlyBudget = 0;

let expenseData = {
    totalExpenses: 0
};

// 2. Collect user input
monthlyBudget = Number(prompt("Enter your monthly budget (KSh):"));

expenseData.totalExpenses = Number(
    prompt("Enter your total expenses (KSh):")
);

// 3. Reusable budget calculation functions

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

function calculateSpendingPercentage(budget, expenses) {
    if (budget <= 0) {
        return 0;
    }

    return (expenses / budget) * 100;
}

// 4. Process and display results
if (
    Number.isFinite(monthlyBudget) &&
    Number.isFinite(expenseData.totalExpenses) &&
    monthlyBudget > 0 &&
    expenseData.totalExpenses >= 0
) {
    let remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        expenseData.totalExpenses
    );

    let spendingPercentage = calculateSpendingPercentage(
        monthlyBudget,
        expenseData.totalExpenses
    );

    console.log("===== SPENDWISE BUDGET SUMMARY =====");

    console.log("Monthly Budget: KSh " + monthlyBudget);

    console.log(
        "Total Expenses: KSh " + expenseData.totalExpenses
    );

    console.log("Remaining Balance: KSh " + remainingBalance);

    console.log(
        "Spending Percentage: " + spendingPercentage.toFixed(2) + "%"
    );

    if (remainingBalance < 0) {
        console.log("Status: You have exceeded your budget.");
    } else {
        console.log("Status: You are within your budget.");
    }

    console.log("===================================");
} else {
    console.log(
        "Invalid input. Please enter valid positive amounts."
    );
}
