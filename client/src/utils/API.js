import axios from "axios";

export default {
  // Get all products
  getProducts: function(query) {
    return axios.get("http://localhost:3001/api/products", {
      params: { q: query }
    });
  },
  // Get product by ID
  getProduct: function(_id) {
    return axios.get("http://localhost:3001/api/products", {
      params: { q: _id }
    });
  },
  // Get all products by catagory
  getCategory: function(query) {
    return axios.get("http://localhost:3001/api/products", {
      params: { q: query }
    });
  },
  // Delete product by ID
  deleteProduct: function(id) {
    return axios.delete("http://localhost:3001/api/products" + id);
  },
  // Saves product
  saveProduct: function(productData) {
    return axios.post("http://localhost:3001/api/products", productData);
  }
};
