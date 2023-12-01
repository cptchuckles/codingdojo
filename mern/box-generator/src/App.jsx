import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxForm from './BoxForm'


class Box {
  static _count = 0;

  /**
   * Creates a new Box object with a unique auto-incrementing id number
   *
   * @param {Object} args
   * @param {string} args.color
   * @param {number} args.size
   */
  constructor({color, size}) {
    this.id = ++Box._count;

    const sizePx = (size || "120") + "px";

    this.styleRules = {
      backgroundColor: color,
      width: sizePx,
      height: sizePx,
      cursor: "pointer",
    };
  }
}


function App() {
  const [_b, setBoxes] = useState([]);
  const boxes = /** @type {Box[]} */ (_b);

  /**
   * Adds a new Box with the form specified properties to boxes
   *
   * @param {SubmitEvent} ev
   */
  const boxFormSubmitHandler = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = Object.fromEntries(formData.entries());

    setBoxes([...boxes, new Box(data)]);

    ev.target.reset();
  }

  /**
   * Removes the box with the specified id from the array
   *
   * @param {number} id
   */
  const deletBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <>
      <h1>Box Generator</h1>
      <BoxForm submitHandler={boxFormSubmitHandler} />
      <div style={{display: "flex", gap: "1em", flexWrap: "wrap"}}>
        {
          boxes.map(box => (
            <div onClick={() => deletBox(box.id)} key={box.id} style={box.styleRules}></div>
          ))
        }
      </div>
    </>
  )
}

export default App
