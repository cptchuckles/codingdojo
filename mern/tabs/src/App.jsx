import { useState } from 'react'
import './App.css'
import TabGroup from './TabGroup.jsx'

function App() {
  return (
    <>
      <h1>Tabs!</h1>
      <TabGroup>
        <div heading="first tab">
          <h2>This is a whole ass tab</h2>
          <p>cool!</p>
        </div>
        <div heading="SECOND???">
          <h2>Another???</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae. Nihil illum provident, voluptatibus maxime earum sint inventore repellendus nemo repudiandae, alias ullam architecto rem corporis fugiat nisi, sequi laborum.</p>
        </div>
        <div heading="The Final Tab®™">
          <h3>smol heading</h3>
          <p>it can have many</p>
          <p>...</p>
          <p>paragiraffes</p>
        </div>
      </TabGroup>
    </>
  )
}

export default App
