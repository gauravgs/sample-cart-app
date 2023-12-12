# Ecommerce Store App

## Introduction

This project aims to implement a simple ecommerce system where clients can add items to their cart, place orders, and potentially receive discount codes. The system includes APIs for adding products to cart, checkout functionality, and admin APIs for generating discount codes and retrieving reports.

### Features

1. **Add Items to Cart**: Clients can add items to their shopping cart.
2. **Checkout**: Clients can successfully place an order, and every nth order is eligible for a 10% discount.
3. **Discount Codes**: Admins can generate discount codes based on specific conditions. **Assumed that all codes are applicable on nth orders, considered n to be 3 always. So all orders with order numbers being multiples of 3 are applicable for discounts**
4. **Report Generation**: Admins can view the count of items purchased, total purchase amount, list of discount codes, and total discount amount.

## Tech Stack

The project is built using the following technologies:

| Technology        | Version       |
| ----------------- | ------------- |
| Angular           | Angular CLI: 16.0.1 & Node: 18.16.0 |
| FastAPI           | 0.95.1   |
| Pydantic, Bootstrap and more|

## Project Structure

```
ecommerce-store/
|-- shopping-app-v1/         # Angular UI Application
|   |-- (Angular files and folders)
|
|-- server/      # FastAPI Web Server
|   |-- (FastAPI files and folders)
|
|-- .gitignore
|-- README.md
```

## How to Run

### Angular UI Application

1. Navigate to the `ui-application` folder.
2. Install dependencies: `npm install`
3. Start the application: `ng serve --o`

### FastAPI Web Server

1. Navigate to the `fastapi-webserver` folder.
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `uvicorn main:app --reload`

### Accessing the Application

- UI Application: Open your browser and go to `http://localhost:4200/home`
- FastAPI Web Server: Access the API documentation at `http://localhost:8000/` for Swagger UI.

## API Documentation
Can be found at the Swagger UI
## Contributing

Feel free to contribute to the project by submitting issues or pull requests. We encourage collaboration and value your input!

## License

This project is licensed under the [MIT License](LICENSE).