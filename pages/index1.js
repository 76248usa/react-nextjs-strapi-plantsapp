import Head from 'next/head'
import Title from '../components/Title'
import { getProducts } from '@/lib/products';

export async function getStaticProps(){
    const products = await getProducts();
   return {props: {products},
   revalidate: 5*60,//seconds
 }
}

export default function HomePage({products}) {
  
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
