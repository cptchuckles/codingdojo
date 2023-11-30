import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({...defaultFormData});

  /**
   * Set the formData's field matching the target name to the target value
   *
   * @param {Event} ev
   */
  const setFormField = (ev) => {
    setFormData({...formData, [ev.target.name]: ev.target.value});
  };

  /**
   * Submits the form and clears user input
   *
   * @param {SubmitEvent} ev
   */
  const submitForm = (ev) => {
    ev.preventDefault();

    console.log(formData);

    setFormData({...defaultFormData});
    ev.target.reset();
  };

  return (
    <>
      <a target="_blank" href="https://github.com/cptchuckles/codingdojo/tree/mern-hookForm/mern/hook-form/src/App.jsx">github source</a>
      <h1>MY MAGICAL FORM</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">
          First Name:
          <input onChange={setFormField} type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input onChange={setFormField} type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={setFormField} type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input onChange={setFormField} type="password" name="password" id="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input onChange={setFormField} type="password" name="confirmPassword" id="confirmPassword" />
        </label>
        <button>SuBmIT</button>
      </form>
      <h2>Your Form Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries({...formData}).map(([k,v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
