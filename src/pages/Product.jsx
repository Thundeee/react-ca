import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/itemGetter';
import { useSessionStorage } from '../hooks/useSessionStorage';

const Product = () => {
  const { id, } = useParams();

  const { items, isLoading, isError } = useContext(ItemContext);

   const  CorrectItem =  items.find((item) => item.id === id);


  const [cart, setCart] = useSessionStorage('cart', []);

  const handleAddToCart = (event) => {
    const id = event.target.value;
  
    if (cart.find((item) => item.id === id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      return;
    } 
  
    const item = items.find((item) => item.id === id);
    item.amount = 1;
    setCart([...cart, item]);
    
  };


  return (
    <div>
        <h1>Product page</h1>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...</div>}
        <h3>{CorrectItem?.title}</h3>
        <p>{CorrectItem?.description}</p>
        <p>Kr {CorrectItem?.price},-</p>
        <img src={CorrectItem?.imageUrl} width="150" alt={CorrectItem?.title} />
        <p>{CorrectItem?.rating}</p>
        <button id='addCart' onClick={handleAddToCart} value={CorrectItem?.id}>Add to cart</button>
        <ul>
          {CorrectItem?.reviews.map((review) => (
            <li key={review.id}>
              <p>{review.username}</p>
              <p>{review.rating}</p>
              <p>{review.description}</p>
              
            
            </li>
            ))
          }

        </ul>
    </div>
  );
};

export default Product;