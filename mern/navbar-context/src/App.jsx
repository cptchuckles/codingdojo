import { useState } from 'react'
import './App.css'
import Wrapper from './Wrapper.jsx'
import Navbar from './Navbar.jsx'
import FormWrapper from './FormWrapper.jsx'


function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  )
}

export default App
