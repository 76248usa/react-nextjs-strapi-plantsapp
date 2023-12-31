import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Page from '../components/Page';

export async function getStaticProps(){
    const products = await getProducts();
   return {props: {products},
   //revalidate: 5*60,//seconds
 }
}

export default function HomePage({products}) {
  
  return (   
 <>
 <Page title="Indoor Plants" />
 
  <ul className="grid grid-cols-1 ps-5 lg:grid-cols-3 gap-4 md:grid-cols-2">
{products.map((product)=> {
  return <li key={product.id}>
    <ProductCard product={product} />
  </li>
})}
  </ul>
 
 </>
  )
}

