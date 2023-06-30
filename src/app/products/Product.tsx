
import React from 'react';

interface ProductProps {
  price: string;
}

const Product: React.FC<ProductProps> = ({ price }) => {
 const handleCheckPrice=()=>{
    alert(price)
 }
  return (
    <div>
      <button onClick={handleCheckPrice}>Check Price</button>
    </div>
  );
};

export default Product;
