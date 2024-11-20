import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-details-page hero">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="product-details">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: Rs. {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
