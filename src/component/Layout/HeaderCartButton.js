import React, { Fragment } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";
const HeaderCartButton=(props)=>{

    return(
     <Fragment>
    <button onClick={props.onShowCart}
     className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
       
    </button>
     </Fragment>
    );
}
export default HeaderCartButton;