import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (products.length > 0) {
            // already ran this hook!!!!!!!
            return;
        }

        const getProducts = axios.get("http://localhost:8000/api/products/")
            .then(result => {
                setProducts(result.data);
            })
            .catch(err => setError(err));
    }, []);

    return (
        <>
        { error && ( <p>{error.message}!!!</p> ) }
        { products.map(product => (
                <p key={product.id}><strong>{product.title}</strong>: {product.description}</p>
        ))}
        </>
    )
};
