import React, { useState, useEffect } from "react";

const EditProductModal = ({ product, editProduct, closeModal }) => {
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) {
      setProductData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductData((prevData) => ({
          ...prevData,
          image: reader.result, // Base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      editProduct(productData);
      closeModal();
      setIsSubmitting(false);
    }, 1000); // Simulating API delay
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Product</h2>
        {isSubmitting && <div className="loader"></div>}
        <form
          onSubmit={handleSubmit}
          style={{ position: "relative", opacity: isSubmitting ? 0.6 : 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={productData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price in INR"
            value={productData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Category</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Beverages">Beverages</option>
            <option value="Clothing">Clothing</option>
          </select>

          <div className="modal-buttons">
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginRight: "30px",
                backgroundColor: isSubmitting ? "#aaa" : "#007bff",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="close-button"
              onClick={closeModal}
              disabled={isSubmitting}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
