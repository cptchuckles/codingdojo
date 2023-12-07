import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './PersonCard'

function App() {
  return (
    <>
      <PersonCard firstName="Jane" lastName="Doe" initialAge={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" initialAge={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" initialAge={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" initialAge={62} hairColor="Brown" />
    </>
  )
}

export default App
