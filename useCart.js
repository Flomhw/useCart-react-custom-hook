import {useState} from 'react'

export default function useCart() {

    const [cart, setCart] = useState([]); /* Here we store the product object */



    const addItem = (productObj, quantity) =>{
      !cart.includes(productObj) && setCart([...cart, {...productObj, quantity}]);
    } /* Add to cart function */

    const removeItem = productObj => {
      setCart(cart.filter(
        item => {
          return item !== productObj;
        }
      ))
    } /* Remove from cart function */

    const quantityAdd = () => {

    } /* Add one item function */

    const quantityRemove = () => {

    } /* Remove one item function */

    const persistCart = savedCart => {
      localStorage.setItem('oldCart', JSON.stringify(savedCart));
    } /* Store cart info as local storage */

    const getPersistedCart = () =>{
      const getOldCart = localStorage.getItem('oldCart');
      setCart(JSON.parse(getOldCart));
    } /* Retrieve a previous cart from local storage */
    
    return {cart, setCart, addItem, removeItem, quantityAdd, quantityRemove, persistCart, getPersistedCart};
}
