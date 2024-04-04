import React from 'react'
import Image from 'next/image'
export default function product(props) {
    //retrieving the data
    const products = props.products;
   

    return (

        <>
            <div className=" grid grid-cols-4 gap-4">
            { Array.isArray(products) && products.map((item, id) => (
                <div className="productFirst" key={id}>
                    <div className="productImage">
                        < img className="w-full producttImage" src={item.image}
                             alt="Error loading the image" />
                    </div>
                    <div className="productContent">
                        <h1 className="font-serif  font-bold">${item.price}</h1>
                        <p className="font-serif text-zinc-800 text-xs title italic">{item.title}</p>
                        <p className="font-serif text-xs description">{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
             
        </>
    )

}