import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Validation from './Validation'


class Validator {
  /**
   * Creates an object which will return a message if the condition returns false
   *
   * @constructor
   * @param {function(any):boolean} condition
   * @param {string} message The error to display when the condition is false
   */
  constructor(condition, message) {
    this.condition = condition;
    this.message = message;
  }

  /**
   * Run the validation check on the given value and return the message if it fails
   *
   * @param {string} value The value to check for
   * @returns {(string|null)}
   */
  check(value) {
    return !this.condition(value) ? this.message : null;
  }
}


function App() {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({...defaultFormData});
  const [validations, setValidations] = useState({});

  const validationMap = {
    firstName: new Validator((v) => v.length >= 2, "First Name must be at least 2 characters"),
    lastName: new Validator((v) => v.length >= 2, "Last Name must be at least 2 characters"),
    email: new Validator((v) => v.length >= 5, "Email must be at least 5 characters"),
    confirmPassword: new Validator((v) => formData.password === v, "Password and Confirmation must match"),
  };

  /**
   * Set the formData's field matching the target name to the target value
   *
   * @param {Event} ev
   */
  const setFormField = (ev) => {
    const field = ev.target.name;
    setFormData({...formData, [field]: ev.target.value});
    if (field in validationMap) {
      setValidations({...validations, [field]: validationMap[field].check(ev.target.value)});
    }
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
      <a target="_blank" href="https://github.com/cptchuckles/codingdojo/tree/mern-moreForms/mern/hook-form/src/App.jsx">github source</a>
      <h1>MY MAGICAL FORM</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">
          First Name:
          <input onChange={setFormField} type="text" name="firstName" id="firstName" />
        </label>
        <Validation message={validations.firstName} />
        <label htmlFor="lastName">
          Last Name:
          <input onChange={setFormField} type="text" name="lastName" id="lastName" />
        </label>
        <Validation message={validations.lastName} />
        <label htmlFor="email">
          Email:
          <input onChange={setFormField} type="email" name="email" id="email" />
        </label>
        <Validation message={validations.email} />
        <label htmlFor="password">
          Password:
          <input onChange={setFormField} type="password" name="password" id="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input onChange={setFormField} type="password" name="confirmPassword" id="confirmPassword" />
        </label>
        <Validation message={validations.confirmPassword} />
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
