import React, { useState } from "react";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

const Admin = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [productToEdit, setProductToEdit] = useState(null);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowEditModal(true);
  };

  return (
    <div className="admin-panel hero">
      <h2>Admin Panel</h2>
      <button
        onClick={() => setShowAddModal(true)}
        className="search-bar add-btn"
        style={{
          fontSize: "large",
          fontFamily: "sans-serif",
          color: "white",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        Add Product
      </button>

      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: Rs.{product.price}</p>
              <p>Category: {product.category}</p>
              <div className="buttons">
                <button
                  onClick={() => deleteProduct(product.id)}
                  style={{
                    marginRight: "15px",
                    backgroundColor: "Red",
                  }}
                >
                  Delete
                </button>
                <button onClick={() => handleEditClick(product)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddProductModal
          addProduct={addProduct}
          closeModal={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && (
        <EditProductModal
          product={productToEdit}
          editProduct={(updatedProduct) => {
            const updatedProducts = products.map((product) =>
              product.id === updatedProduct.id ? updatedProduct : product
            );
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
          }}
          closeModal={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default Admin;
