import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  // req.params.id
  const params = useParams();
  console.log(params.productId);

  const navigate = useNavigate();
 
  useEffect(() => {
    setTimeout(() => {
      navigate(0);
    }, 3000);
  }, []);

  useEffect(() => {
    // fetch(`/api/products/${params.productId}`)
    // state.producst[params.productId]
  }, [params.productId]);


  return (
    <div>
      <h2>Product Component for #{params.productId}</h2>
    </div>
  );
};

export default Product;
