import { useNavigate, Routes, Route } from 'react-router-dom'
import DarthVadersRevenge from './DarthVadersRevenge'
import ResourceSelector from './ResourceSelector'
import ResourceViewer from './ResourceViewer'
import './App.css'

function App() {
  const navigator = useNavigate();

  async function onResourceFormSubmit({category, id}) {
    navigator(`/${category}/${id}`);
  }

  return (
    <>
      <DarthVadersRevenge />
      <h1>luke i am your api</h1>
      <ResourceSelector formSubmitAction={onResourceFormSubmit} />
      <Routes>
        <Route path="/" element={(<p>try using the thing</p>)} />
        <Route path="/:category/:id" element={<ResourceViewer />} />
      </Routes>
    </>
  )
}

export default App
