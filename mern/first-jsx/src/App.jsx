import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Marathon</li>
        <li>Feed the Cats</li>
        <li>Install Linux on my new Thinkpad P1 Gen 6 that i got because i have no impulse control please send help</li>
      </ul>
    </>
  )
}

export default App
