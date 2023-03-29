import { useSessionStorage } from '../hooks/useSessionStorage';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem, clearItems } from '../store/cartSlice/cart';
const Checkout = () => {

  const dispatch = useDispatch();

  const [cart, setCart] = useSessionStorage('cart', []);
  console.log(cart);

  const remover = (event) => {
    const id = event.target.value;
let products = JSON.parse(sessionStorage.getItem('cart'));
const index = products.find((item) => item.id === id);
console.log(index);
if (index.amount > 1) {
  index.amount --;
  sessionStorage.setItem('cart', JSON.stringify(products));
} else {
  console.log('remove');
  products = cart.filter((item) => item.id !== id);
  sessionStorage.setItem('cart', JSON.stringify(products));

}

setCart(products);
dispatch(removeItem());

  }

  const exiter = () => {
    sessionStorage.removeItem('cart');
    setCart([]);
    dispatch(clearItems())
    };
  
  
    return (
      <div>
          <h1>Checkout page</h1>
          <ul>
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.map((item) => (
              <li key={item?.id}>
                <p>{item?.title}</p>
                <p>{item?.description}</p>
                <p>Kr {item?.price} per stk</p>
                <p>{item?.amount} stk</p>
                <p>Kr {(item?.price * item?.amount).toFixed(2)} total</p>
                <button onClick={remover} value={item?.id}>Remove from cart</button>

              </li>
              ))
            }
            {
              <h3>Total price: Kr {cart.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)}</h3>

              }

          </ul>
          <button onClick={exiter}><Link to={`/CheckoutSuccess`}>Checkout!</Link></button>
      </div>
    );
  };

  export default Checkout;