//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCounter from './components/ItemCounter'

function App() {
  return ( 
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemCounter stock = {20} />
   </>
  )
}

export default App;
