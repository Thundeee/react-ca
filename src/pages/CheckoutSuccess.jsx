import { Link } from 'react-router-dom';


const CheckoutSuccess = () => {


    return (
      <div>
          <h1>CheckoutSuccess page</h1>

          <button><Link to={`/`}>Return to Store</Link></button>



      </div>
    );
  };
  
  export default CheckoutSuccess;