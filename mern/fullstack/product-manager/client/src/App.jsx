import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProductList from './views/ProductList'
import Navbar from './components/Navbar'
import CreateProduct from './views/CreateProduct'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  function createProduct(product) {
    axios.post("http://localhost:8000/api/products/", product)
      .then(({data: newProduct}) => {
        setProducts((currentProducts) => [...currentProducts, newProduct]);
        navigator("/products");
      })
      .catch(err => console.log("Couldn't post new product:", err));
  }

  return (
    <>
      <h1>Product Manager!!!!!!!!!</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>there isn't much going on here, make a selection</p>} />
        <Route path='/products' element={<ProductList state={{products, setProducts}} />} />
        <Route path="/products/new" element={<CreateProduct createProduct={createProduct} />} />
      </Routes>
    </>
  )
}

export default App;
