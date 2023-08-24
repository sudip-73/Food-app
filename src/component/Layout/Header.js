import React,{Fragment} from 'react';
import classes from './Header.module.css';
import Meal from '../../image/Meal.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{


  return (
  <Fragment>
  <header className={classes.header}>
    <h1>Meal Project</h1>
     <HeaderCartButton onShowCart={props.onShowCart}/>
  </header>

<div className={classes["main-image"]}>
  <img src={Meal} alt="/" />
</div>
</Fragment>
  );
}

export default Header;
