import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const [searchItem, setSearchItem] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("asc");
    const navigate = useNavigate();

    // Filter products
    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchItem.toLowerCase())
        )
        .filter((product) =>
            filterCategory === "All"
                ? true
                : product.category.toLowerCase() === filterCategory.toLowerCase()
        )
        .sort((a, b) =>
            sortOrder === "asc"
                ? a.price - b.price
                : b.price - a.price
        );

    const handleProductClick = (id) => {
        navigate(`/customer/products/${id}`);
    };

    return (
        <div className="customer-panel hero">
            <h2>Products Dashboard</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by product name..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="search-bar"
            />

            {/* Filter and Sort Options */}
            <div className="filters">
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    {[...new Set(products.map((p) => p.category))].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            {/* Displaying Product Cards */}
            {filteredProducts.length > 0 ? (
                <div className="product-cards">
                    {filteredProducts.map((product) => (
                        <div
                            className="product-card"
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>Price: Rs. {product.price}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-products" style={{fontSize:"large", color:"black"}}>
                    <p>No products found.</p>
                </div>
            )}
        </div>
    );
};

export default Customer;
