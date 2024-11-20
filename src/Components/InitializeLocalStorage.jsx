import { useEffect } from "react";
import data from "../products.json";

const InitializeLocalStorage = () => {
  useEffect(() => {
    // Check if data is already in local storage
    if (!localStorage.getItem("products")) {
      // Store data in local storage
      localStorage.setItem("products", JSON.stringify(data.products));
    }
  }, []);

  return null;
};

export default InitializeLocalStorage;
