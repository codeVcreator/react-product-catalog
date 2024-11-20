React Product Catalog
This project is a single-page application (SPA) built with React.js that serves as a product catalog. Users can view, search, filter, sort, and browse detailed information about products. The project uses static JSON data to simulate product information.

Features
Core Features
Product Listing: Display a list of products with image, name, price, and a "View Details" button.
Product Details: View detailed information, including a larger image and description of a selected product.
Search: Search products by name in real-time.
Category Filter: Filter products based on their category.
Responsive Design: Fully responsive layout, optimized for desktop, tablet, and mobile devices.
Optional Enhancements
Sorting: Sort products by price in ascending or descending order.
Admin Panel: Manage products (add, edit, delete) via an admin interface.
Animations: Subtle animations for hover effects and transitions.
Cart Functionality: Add products to a cart (implemented as a placeholder feature).
Screenshots
Home Page

Admin Panel

Product Details

Installation
Prerequisites
Make sure you have the following installed on your system:

Node.js (v16+ recommended)
npm or yarn
Steps to Run Locally
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/react-product-catalog.git
cd react-product-catalog
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the app in your browser at:

arduino
Copy code
http://localhost:3000
Project Structure
plaintext
Copy code
src/
├── components/
│   ├── AdminPanel.jsx       # Admin functionality for managing products
│   ├── CategoryFilter.jsx   # Component for filtering by category
│   ├── ProductDetails.jsx   # Component to show detailed product view
│   ├── ProductItem.jsx      # Individual product card
│   ├── ProductList.jsx      # Grid/list view of products
│   └── SearchBar.jsx        # Search bar for filtering products by name
├── data/
│   └── products.json        # Static JSON data for products
├── pages/
│   ├── HomePage.jsx         # Main product catalog page
│   ├── AdminPage.jsx        # Admin page
│   └── ProductDetailsPage.jsx # Product details page
├── App.jsx                  # Main React app component
├── index.css                # Global CSS
└── index.js                 # Entry point of the app
Static JSON Sample
Example of a product in products.json:

json
Copy code
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "price": 99.99,
    "image": "images/headphones.jpg",
    "description": "High-quality wireless headphones with noise cancellation."
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 199.99,
    "image": "images/smartwatch.jpg",
    "description": "Stay connected on the go with this stylish smart watch."
  }
]
Challenges and Learnings
State Management: Implemented useState and useEffect to handle component states efficiently.
Routing: Used React Router to create a seamless navigation experience between pages.
Responsive Design: Ensured responsiveness with flexbox and media queries.
Reusable Components: Created modular, reusable components like ProductItem and CategoryFilter.
Tools and Libraries Used
React: Framework for building the SPA.
React Router: For page navigation.
Tailwind CSS: For styling the UI.
JSON: Static file used as a mock database.