# Invoice Form Application

This project is an Invoice Form application built with React and TypeScript. It allows users to create, view, and reset invoices. The application communicates with a GraphQL API to save invoice data and displays real-time updates as the user fills out the form.

## Features

### Invoice Form
- **Form Layout:** The form is divided into sections for "Bill From," "Bill To," "Invoice Details," and "Items List," according to the provided Figma design.
- **Form Validations:** All fields in the form are required and include validation logic to ensure that data is entered correctly.
- **Default Date:** The Invoice Date is set to the current date by default.
- **Price Calculation:** The price of a single item is calculated based on Quantity and Price inputs.
- **Total Price Calculation:** The total price of all items is calculated after deducting a 10% tax.
- **Invoice Terms:** The available invoice terms are NET_10_DAYS, NET_20_DAYS, and NET_30_DAYS.

### Real-Time Data Display
- As the user fills out the form, the right-hand side of the page displays the real-time invoice data.

### Reset Functionality
- A Reset button is provided to clear all form fields and the real-time data display.

### Save Functionality
- Upon saving, the invoice data is sent to a GraphQL API using a mutation.
- A toast message "Invoice created successfully!" is displayed upon successful creation.
- After saving, the form is reset to its empty state.

### Design & Responsiveness
- The design is pixel-perfect according to the provided Figma design.
- The form and preview panel layout are responsive and work on different screen sizes.

## Technology Stack
- **React JS**
- **TypeScript**
- **Tailwind CSS** for styling
- **Apollo Client** for GraphQL API requests

## API Endpoint
The application communicates with the following GraphQL API endpoint:
    https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql


## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Abakar26/invoice-form-assessment.git
    ```
2. Navigate to the project directory:
    ```bash
    cd invoice-form
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
4. Set your apiUrl in .env:
    ```bash
    REACT_APP_API_URL=your_api_url
    ```

### Running the Application
To start the application, run:

```bash
npm start
