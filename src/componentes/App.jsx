import './App.css'
import Header from './Header.jsx';
import FunctionalComponent from './FunctionalComponent.jsx';

function App() {
  const CONSTANTE = "hola mundo"
  const OBJETO = {
    nombre: "Juanita",
    edad: 41
  }
  return (
    <>
    <div className='bg-primary card'>
    <Header />
    </div>
    <div>
      <FunctionalComponent 
        props1 = { CONSTANTE}
        props2 = "HolaPerroQueMiraSapo"
        props3 = { 14 }
        props4 = { OBJETO } 
      />
    </div>
    </>
  )
}

export default App;
