import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import "./ProductForm.css"

export default ({ formSubmitAction }) => {
  const [defaults, setDefaults] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const [title, setTitle] = useState(defaults.title);
  const [price, setPrice] = useState(defaults.price);
  const [description, setDescription] = useState(defaults.description);

  const navigator = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get("http://localhost:8000/api/products/" + id)
        .then(({data}) => {
          setDefaults(data);
        })
        .catch(() => {});
    }
  }, [])

  useEffect(resetFormFields, [defaults]);

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
    const payload = { title, price, description };
    if (id) {
      payload.id = id;
    }
    formSubmitAction(payload);
  }

  function resetFormFields() {
    setTitle(defaults.title);
    setPrice(defaults.price);
    setDescription(defaults.description);
  }

  function cancel(ev) {
    ev.preventDefault();
    navigator(-1);
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
      <div className="form-actions">
        <button>{ id ? "Update" : "Creyeet" }</button>
        <div>
          <button type="button" onClick={resetFormFields}>Reset</button>
          <button type="button" onClick={cancel}>Cancel</button>
        </div>
      </div>
    </form>
  )
}
