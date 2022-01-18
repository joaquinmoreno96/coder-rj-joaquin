import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

function App() {
  const arrayNavBar = ['INICIO', 'PRODUCTOS','SOBRE NOSOTROS','CONTACTO']
  return (
    <div>
    <NavBar arrayNavBar={arrayNavBar}/>
    <ItemListContainer/>
    </div>
  )}

export default App;
