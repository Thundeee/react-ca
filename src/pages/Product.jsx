import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const Product = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
        <h1>Product page</h1>
    </div>
  );
};

export default Product;