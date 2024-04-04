
import Layout from '@/components/layout'
import React from 'react'
import useSWR from 'swr';
import Link from 'next/link';

//adding the jotai
import { useAtom } from 'jotai'

//getting the data from the cart
import { countAtom } from '@/store'

//getting the product in the cart

 
const fetcher = (url) => fetch(url).then((res) => res.json()); 
export default function Products()

{
  const [product, addProduct] = useAtom(countAtom)
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;




  

    function addToCart(newProduct) {
         //adding the new product in the cart
        addProduct([...product, newProduct]);

    }
  return(
    <>
    <Layout></Layout>
    {data.map((item, id) => (
        <div  className = "firstDiv" key={id}>
          <div className=" max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full img" src={item.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
      {item.description}
    </p>
    <p>{item.category}</p>
    <p>{item.price}</p>
    <p>{item.rating.rate}</p>
    <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link
           href = {`/products/${item?.id}`}
    
          >
          View Details
    </Link>
     </button>

                    <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to Cart</button>


  </div>
   
</div>
        </div>
      ))}
 
    </>
  )

}



 