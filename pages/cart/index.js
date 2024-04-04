import { useAtom } from 'jotai'
import { countAtom } from '@/store'
import Layout from '@/components/layout'

export default function Cart() {
    //get the data via application state Management
    const [product, setProducts] = useAtom(countAtom)
 
    return (
        <>
            <Layout />

            {product.map((item, index) => (
                <li key={index}>
                    <img className="w-full img" src={item.image} alt="Sunset in the mountains" />
                    <strong>{item.title}</strong>: {item.description} <br />
                    <strong>{item.price}</strong>
                </li>
            ))}
            {product.length > 0 ? <strong>Total:  ${product.reduce((total, prod) => total + prod.price, 0).toFixed(2)}</strong> : null}
            


        </>)
}


