import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./ProductShow.css"

export default () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setProduct(null);
        axios.get("http://localhost:8000/api/products/" + id)
            .then(({ data }) => {
                setError(null);
                setProduct(data);
            })
            .catch(err => setError(err));
    }, []);

    return (
    <>
        { error && ( <p>{error}!!!</p> )}
        { product && (<>
            <div className="heading">
                <h2>{product.title}</h2>
                <div className="price"><p>Price:</p><pre>{product.price}</pre></div>
            </div>
            <p className="description">{product.description}</p>
            <p className="date">Created at: {product.createdAt}</p>
            <p className="date">Updated at: {product.updatedAt}</p>
        </>)}
    </>
    )
}
