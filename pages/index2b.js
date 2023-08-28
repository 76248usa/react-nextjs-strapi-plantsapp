import { getProducts } from '@/lib/products';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Title from '../components/Title'

//fetching products on client side -- useEffect()
//fetch data from internal API route 
export default function HomePage() {
 const [products, setProducts] = useState([]);
 
 useEffect(() => {
    (async() => {
        const response = await fetch('api/products');
        const products = await response.json();
        setProducts(products)
    })();   
 }, [])
  
  return (
    
 <>
 <Head>
  <title>Next Shop</title>
 </Head>
 <main className="px-6 py-4">
  <Title title="Next Shop" />
  <ul>
{products.map((product)=> {
  return <li key={product.id}>
    {product.title}
  </li>
})}
  </ul>
 </main>
 </>
  )
}
