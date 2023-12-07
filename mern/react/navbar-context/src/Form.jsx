import { useContext } from 'react'
import NameContext from './context/NameContext'

const Form = () => {
  const {name, setName} = useContext(NameContext);

  return (
    <label>Your Name:
      <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
    </label>
  )
};

export default Form;
