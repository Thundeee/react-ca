import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/itemGetter';

const Product = () => {
  const { id, } = useParams();
  console.log(id);

  const { items, isLoading, isError } = useContext(ItemContext);
  console.log(items);

   const  CorrectItem =  items.find((item) => item.id === id);
  console.log(CorrectItem);


  return (
    <div>
        <h1>Product page</h1>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...</div>}
        <h3>{CorrectItem?.title}</h3>
        <p>{CorrectItem?.description}</p>
        <p>{CorrectItem?.price}</p>
        <img src={CorrectItem?.imageUrl} alt={CorrectItem?.title} />
        <p>{CorrectItem?.rating}</p>
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