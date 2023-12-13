import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateProduct.css"

export default ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigator = useNavigate();

  const setter = {
    title: setTitle,
    price: setPrice,
    description: setDescription,
  };

  function formChanged(ev) {
    ev.preventDefault();
    setter[ev.target.name](ev.target.value);
  }

  function submitForm(ev) {
    ev.preventDefault();
    createProduct({ title, price, description });
    navigator("/products");
  }

  return (
    <form onSubmit={submitForm}>
      <label>Title:
        <input
          type="text"
          name="title"
          placeholder="Enter a title"
          value={title}
          onChange={formChanged} />
      </label>
      <label>Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={formChanged} />
      </label>
      <label>Description:
        <input
          type="text"
          name="description"
          placeholder="Enter a description"
          value={description}
          onChange={formChanged} />
      </label>
      <button>Creyeet</button>
    </form>
  )
}
