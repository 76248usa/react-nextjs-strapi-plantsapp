import React from 'react'
import { useUser } from '@/hooks/user';

import { getProduct, getProducts } from '@/lib/products'
import { ApiError } from '@/lib/api';
import Image from 'next/image';
import Page from '@/components/Page';

export async function getStaticPaths(){
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: {id: product.id.toString()}
        })),
        fallback: 'blocking',
    }
}

export async function getStaticProps({params: {id}}){
    try {
      const product = await getProduct(id)
    return {props: {product}}
    //revalidate: 5*60,//seconds  
    } catch (error) {
     if(error instanceof ApiError && error.status === 404){
        return {notFound: true}
     }
     throw error;
    }    
}

function ProductPage({product}) {
  const user = useUser();
  console.log(user)
  return (
    <>
    <Page title={product.title}>
    
    
        <div className='flex flex-col lg:flex-row'>
          <div>
            <Image src={product.pictureUrl} alt=""
       width={640} height={480} />
          </div>
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold">$ {product.price.toFixed(2)}</p>
         
        </div>
 
        </div>
       </Page>

      
    </>
  )
}

export default ProductPage 









