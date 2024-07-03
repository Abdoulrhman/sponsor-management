# Sponsor Management Application

## Objective

The objective of this test is to assess the ability to create an Angular application that lists and stores sponsors and their related contact officers using API endpoints. The application handles data retrieval, dynamic form creation, validation, error handling, and success message display.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- Angular CLI
- A modern web browser

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-link>
   cd sponsor-management-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Run the application:

   ```sh
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200`.

## Usage

### List Sponsors

- The application retrieves a list of sponsors and their related contact officers using the provided API endpoint:

  ```url
  https://gateway.abnaey.com/api/v1/billing/sponsors
  ```

- The sponsor data is displayed in a well-designed Angular component with a list view.
- Sponsor data is properly formatted and organized.

### Store Sponsor

- A form allows users to input sponsor data, including sponsor contact officers.
- Sponsor contact officers are dynamically added, allowing any number of officers to be included.
- Client-side validation ensures the form data is complete and follows necessary rules (required fields, valid email addresses, etc.).
- The provided API endpoint is used to store a new sponsor along with their sponsor contact officers:

  ```url
  https://gateway.abnaey.com/api/v1/billing/sponsors
  ```

- Errors returned from the server (Server Side Validation) or during the POST request are handled, displaying appropriate error messages.
- A success message is displayed upon successful submission of a new sponsor.

## Documentation

### What I Do

- Utilized a Login API to get a token and used this token in all API requests for authentication and authorization.
- Utilized Angular's reactive forms for dynamic form creation and validation.
- Employed Angular services for API interaction and data handling.
- Implemented reusable components for listing and form functionalities.

### Libraries/Frameworks Used

- Angular
- Angular Material (for UI components)
- RxJS (for reactive programming)
- Bootstrap (for responsive design)

---
