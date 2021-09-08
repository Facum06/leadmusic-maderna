//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';


function App() {
  return ( 
    <>
    <BrowserRouter>
      <div className='app-frm'>
        <div>
          <NavBar/>
        </div>        
        <Switch>
            <Route path='/' exact>
              <ItemListContainer />
            </Route>
            <Route path='/cart' exact>
              <Cart />
            </Route>
            <Route path='/:categoria' exact>
              <ItemList />
            </Route>
            <Route path='/:categoria/:id' exact>
              <ItemDetailContainer  />
            </Route>

          </Switch>
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
