import Link from 'next/link';

//adding the jotai
import { useAtom } from 'jotai'

//getting the data from the cart
import { countAtom } from '@/store'
export default function Layout(props) {
    const [productList, setProductlist] = useAtom(countAtom)
  return (
    <>
      <h1>Timble Store</h1>
           <Link href="/">Home</Link> | <Link href="/about">About</Link> | 
           <Link href="/">Contact</Link> | <Link href="/about">Dashboard</Link> |
           <Link href="/">Dashboard Preferences</Link> | <Link href="/products">Products</Link>  |
          <Link href="/cart">Shopping Cart
              {productList.length > 0 ? <span>({productList.length})</span> : null}
</Link> 
      
    
  
    </>
  );
}