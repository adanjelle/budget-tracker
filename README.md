# SpendWise – Personal Budget Tracker

**Track Smart. Spend Wisely.**

## Project Overview

SpendWise is a personal budgeting application developed using HTML, CSS, and JavaScript. It helps users manage their monthly budgets, record expenses, monitor spending, and calculate their remaining balance.

The project demonstrates fundamental web development concepts, including responsive design, JavaScript variables, arrays, functions, conditional statements, loops, DOM manipulation, and event listeners.

## Features

### 1. Responsive Dashboard
- Clean and modern dashboard layout.
- CSS Grid and Flexbox for page organization.
- Responsive design for desktop and mobile screens.
- Light and dark theme support where configured.

### 2. Budget Management
- Enter and update a monthly budget.
- Calculate total expenses.
- Automatically calculate the remaining balance.
- Monitor spending against the available budget.

### 3. Expense Management
- Add multiple expense records.
- Enter expense names, amounts, and categories.
- Display expenses dynamically in a table.
- Delete individual expense records.

### 4. Budget Monitoring
- Identify when spending is within the budget.
- Receive warnings when 80% or more of the budget is used.
- Receive alerts when expenses exceed the available budget.

### 5. JavaScript Functionality
- Variables and data types for storing application information.
- Arrays for managing multiple expense records.
- Conditional statements for budget decisions.
- Loops for processing expense records.
- Functions for reusable budget calculations.
- DOM manipulation for updating webpage content.
- Event listeners for responding to user actions.

## Technologies Used

- **HTML5** – Webpage structure.
- **CSS3** – Styling, layout, responsiveness, and interactions.
- **JavaScript** – Application logic, calculations, and dynamic updates.
- **Visual Studio Code** – Development environment.
- **Git and GitHub** – Version control and project hosting.

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── index_backup.html
└── style_backup.css
```

## How to Run the Project

1. Clone or download the project repository.
2. Open the project folder in Visual Studio Code.
3. Start a local development server using Python:

```bash
python3 -m http.server 8000
```

4. Open your browser and visit:

```text
http://localhost:8000
```

5. Enter your monthly budget.
6. Add expenses and select their categories.
7. View the automatically updated budget summary.
8. Delete expenses to see the calculations update.

## Example

Suppose a user sets a monthly budget of KSh 20,000 and records:

| Expense | Amount |
|---|---:|
| Food | KSh 2,000 |
| Transport | KSh 1,500 |
| Rent | KSh 8,000 |
| **Total Expenses** | **KSh 11,500** |

The remaining balance is:

**KSh 20,000 − KSh 11,500 = KSh 8,500**

## Current Project Limitations

- Expense records are stored in a JavaScript array.
- Data is not permanently saved.
- Refreshing the browser resets the budget and expense records.
- The application does not currently use a backend database or user authentication.

## Learning Objectives

This project demonstrates practical application of:

- HTML page structure.
- CSS styling and responsive layouts.
- JavaScript variables and data types.
- Arrays and loops.
- Conditional statements.
- Functions and calculations.
- DOM manipulation.
- Event handling.

## Future Improvements

- Add local storage to preserve expenses after refreshing.
- Introduce expense editing functionality.
- Add spending charts and visual reports.
- Implement expense filtering by category.
- Integrate a database for permanent storage.
- Add user accounts and authentication.

## Author

**Adan Jelle Loge**

SpendWise – Track Smart. Spend Wisely.