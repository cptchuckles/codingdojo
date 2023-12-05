import { useContext } from 'react';
import NameContext from './context/NameContext';

const h1style = {
  textAlign: "right",
  width: "100%",
  backgroundColor: "purple",
  color: "white",
};

const Navbar = () => {
  const {name} = useContext(NameContext);

  return (<h1 style={h1style}>Hello {name}!</h1>);
};

export default Navbar;
