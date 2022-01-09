import './App.css';

import NavBar from './componentes/NavBar';

function App() {
  const arrayNavBar = ['INICIO', 'PRODUCTOS','SOBRE NOSOTROS','CONTACTO']
  return (
    <NavBar arrayNavBar={arrayNavBar}/>
  )}

export default App;
