import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'

const Home = () => <h1>henlo worl</h1>

const ThingRenderer = () => {
  const { word } = useParams();

  return (
    <p>The { isNaN(word) ? "word" : "number" } is {word}</p>
  )
}

const ColorfulThingRenderer = () => {
  const { word, fg, bg } = useParams();

  return (
    <p style={{color: fg, backgroundColor: bg}}>{word}</p>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<ThingRenderer />} />
        <Route path="/:word/:fg/:bg" element={<ColorfulThingRenderer />} />
      </Routes>
    </>
  )
}

export default App
