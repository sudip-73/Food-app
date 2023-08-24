import CartContext from "./cart-contex";

const CartProvider =props =>{

    const CartContext={
        items : [],
    totalAmount : 0,
    addItems : (items)=>{},
    removeItems: (id)=>{},
    }

 return <CartContext.Provider>
    {props.children}
 </CartContext.Provider>
}
export default CartProvider;