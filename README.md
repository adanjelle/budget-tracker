# SpendWise Dashboard

**A Modern Personal Finance Dashboard**

SpendWise is a responsive personal finance dashboard designed to provide a clean and organized overview of income, expenses, savings, and spending categories.

This project focuses on building a modern dashboard interface using HTML5 and CSS3, with an emphasis on CSS Grid, Flexbox, responsive layouts, and reusable CSS custom properties.

## Features

- **Dashboard Layout:** Modern layout featuring a sidebar, navigation menu, and main content area.
- **Financial Summary Cards:** Displays total balance, monthly income, and monthly expenses.
- **Expense Categories:** Six category cards covering Food, Transport, Rent, Entertainment, Savings, and Utilities.
- **Recent Transactions:** Displays sample financial transactions.
- **Responsive Design:** Adapts to different screen sizes using CSS media queries.
- **CSS Custom Properties:** Uses reusable CSS variables for consistent application theming.
- **Dark Theme:** Supports system dark-mode preferences.
- **Card Micro-interactions:** Smooth hover and keyboard-focus effects.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- CSS Media Queries
- Google Fonts (Inter and Poppins)

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
├── README.md
│
├── index_backup.html
└── style_backup.css
```

## CSS Concepts Implemented

### 1. CSS Grid
Used to structure the overall dashboard layout, financial summary cards, and expense category cards.

### 2. Flexbox
Used to organize sidebar navigation, header elements, and individual dashboard card contents.

### 3. Responsive Design
Media queries adapt the dashboard to smaller screens. Below 768px, the dashboard changes to a single-column layout.

### 4. CSS Custom Properties
The application defines reusable theme variables inside the `:root` selector, including brand, accent, background, surface, and text colours.

### 5. Micro-interactions
Dashboard cards feature smooth hover and keyboard-focus transitions using CSS transforms and box shadows. Transitions last 200ms.

### 6. Dark Theme
The dashboard supports automatic dark-mode styling through:

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Dark theme variables */
    }
}
```

## How to Run the Project

1. Clone or download the project repository.
2. Open the project folder.
3. Start a local development server:

```bash
python3 -m http.server 8000
```

4. Open your browser and visit:

```text
http://localhost:8000
```

## Responsive Testing

The dashboard can be tested using Chrome Developer Tools.

1. Open Chrome DevTools.
2. Enable the Device Toolbar.
3. Test different viewport sizes.
4. Verify the single-column layout below 768px.
5. Test the dark theme using the browser's colour-scheme emulation.

## Project Scope

This project focuses on the visual structure and presentation of a personal finance dashboard. Financial figures and transactions are static sample content. Dynamic expense tracking, authentication, and database integration are outside the scope of this stage.

## Author

**Adan Jelle Loge**

Computer Science Student  
Garissa University

---

*SpendWise – Track Smart. Spend Wisely.*