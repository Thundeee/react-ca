import { useContext } from 'react';
import { ItemContext } from '../context/itemGetter';
import { Link } from 'react-router-dom';


 const Home =  () => {

  const { items, isLoading, isError } = useContext(ItemContext);
  console.log(items);

  return (
    <div>
        <h1>Home pae</h1>
        
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...</div>}
        {items.map((item) =>
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button><Link to={`/product/${item.id}`}>View Product</Link></button>

          </div>)
        
        }
  

    </div>
  );
};

export default Home;