import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductList.css"
import { Link } from "react-router-dom";

let antiDoubleGet = false;
export default ({state}) => {
    const { products, setProducts } = state;

    const [error, setError] = useState(null);

    useEffect(() => {
        if (antiDoubleGet || products.length > 0) {
            // already ran this hook!!!!!!!
            console.log("not repopulating list");
            return;
        }
        console.log("GETTING PRODUCT LIST!!!!!");

        antiDoubleGet = true;
        axios.get("http://localhost:8000/api/products/")
            .then(result => {
                setProducts(result.data);
                antiDoubleGet = false;
            })
            .catch(err => setError(err));
    }, []);

    return (
        <>
        { error && ( <p style={{color: "red"}}>{error.message}!!!</p> ) }
        { products.map(product => (
            <div className="product" key={product._id}>
                <strong><Link to={`/products/${product._id}`}>{product.title}</Link></strong>
                <span className="description">{product.description}</span>
                <pre>{product.price}</pre>
            </div>
        ))}
        </>
    )
};
