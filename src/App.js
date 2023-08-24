import React,{Fragment, useState} from 'react';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';


const App=()=> {

const [ cartshow, setCartShow]=useState(false);

const ShowmeCart=()=>{
  // Cart is show
  setCartShow(true);
}
const NotShowCart=()=>{
  setCartShow(false);
}

  return (
  <Fragment>
   {cartshow &&  <Cart onClose={NotShowCart}/>}
   <Header onShowCart={ShowmeCart}/>
   <main>
   <Meals/>
   </main>
  </Fragment>
  );
}

export default App;
