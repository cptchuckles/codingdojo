import { useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import ProductList from './views/ProductList'
import ProductForm from './views/ProductForm'
import ProductShow from './views/ProductShow'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  function createProduct(product) {
    axios.post("http://localhost:8000/api/products/", product)
      .then(({data: newProduct}) => {
        setProducts((currentProducts) => [...currentProducts, newProduct]);
        navigator("/products/" + newProduct._id);
      })
      .catch(err => console.log("Couldn't post new product:", err));
  }

  function updateProduct(newProduct) {
    axios.patch(`http://localhost:8000/api/products/${newProduct.id}`, newProduct)
      .then(({data: updatedProduct}) => {
        setProducts((currentProducts) => currentProducts.map(product => {
          return product._id === updatedProduct._id ? updatedProduct : product;
        }));
        navigator(`/products/${updatedProduct._id}`);
      })
      .catch(err => console.error("Could not update product:", err));
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        setProducts((currentProducts) => currentProducts.filter(product => product._id !== id));
        navigator("/products");
      })
      .catch(err => console.error("Could not delete a product:", err));
  }

  return (
    <>
      <h1>Product Manager!!!!!!!!!</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>there isn't much going on here, make a selection</p>} />
        <Route path='/products' element={<ProductList deleteAction={deleteProduct} state={{products, setProducts}} />} />
        <Route path="/products/new" element={<ProductForm formSubmitAction={createProduct} />} />
        <Route path="/products/:id" element={<ProductShow deleteAction={deleteProduct} />} />
        <Route path="/products/:id/edit" element={<ProductForm formSubmitAction={updateProduct} />} />
      </Routes>
    </>
  )
}

export default App;
