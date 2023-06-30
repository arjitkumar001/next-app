'use client'
// fatch api data in server component
import Product from './Product';
import style from '@/app/page.module.css';

interface ProductData {
    id: number;
    title: string;
    description: string;
    price: string
}

async function productList(): Promise<ProductData[]> {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}

export default async function Page() {
    try {
        const products = await productList();
        console.log(products);

        return (
            <table className={style.products}>
                <h1>Fetch Product data</h1>
                {products.map((item) => (
                    <tr className={style.product} key={item.id}>
                        <td >{item.title} </td>
                       <td> <Product price={item.price} /></td>
                    </tr>
                ))}
            </table>
        );
    } catch (error) {
        console.error(error);
        return null; // or display an error message
    }
}
