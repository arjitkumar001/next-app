'use client'

import React, { useEffect, useState } from 'react';
import style from '@/app/page.module.css';

interface Product {
  id: number;
  title: string;
  description:string;
  price:string
}

const Page: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);

        // Check if the response has a 'products' property and it is an array
        if (Array.isArray(data.products)) {
          setProduct(data.products);
        } else {
          console.error("Invalid data format received from API");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.dashboard}>
      <h1>Fetch API</h1>
      <table className={style.table}>
      <tr className={style.products}>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            </tr>
      {product.map((item) => (    
            <tr className={style.product} key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
      ))}
       </table>
    </div>
  );
};

export default Page;


