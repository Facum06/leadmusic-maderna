//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Contact from './components/Contact';

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
            <Route path='/contacto' exact>
              <Contact />
            </Route>                      
            <Route path='/:cate' exact>
              <ItemList />
            </Route>
            <Route path='/:cate/:id' exact>
              <ItemDetailContainer  />
            </Route>
            
          </Switch>
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
