import React from 'react'
import useSWR from 'swr';
import Product from "@/components/product"
import { useState, useEffect } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Brand() {
    const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);

    //initially we have all the products
    const [product, setProduct] = useState(data);

    useEffect(() => {
        // Check if data is available and update product state
        if (data) {
            setProduct(data);
        }
    }, [data]); // Re-run effect whenever data changes
    let newProduct =[];

   
    function handleInputChange(value) {
       
        //whatever value to compare
        const compareItem = value;
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === compareItem) {
                   newProduct.push(data[i]); 
                }
                
            }
            setProduct(newProduct);
        }
    }

    function handleClickChange(value) {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].price < value) {

                    for (let i = 0; i < product.length; i++) {
                        if (!product[i].id === data[i].id) {
                            newProduct.push(data[i]);
                             }

                    }
                }

            }
            setProduct(newProduct);
        }
    }
    return (
        <>
           
                <div className="brandFirst" >
                    <div className="brand">
                        <form>
                            <h1 className="font-serif">Category</h1>
                            <select name="brand" className="firstInput text-white"
                                onChange={(event) => handleInputChange(event.target.value)}>
                                <option value="" className="font-serif text-white"> </option>
                                <option value="men's clothing" className="font-serif text-white">Mens Clothing</option>
                                <option value="jewelery" className="font-serif text-white" >Jewelery</option>
                                <option value="electronics" className="font-serif text-white" >Electronics</option>
                                <option value="women's clothing" className="font-serif text-white" >Women's Clothing</option></select
                            >
                            <div className="price">
                                <h1 className="font-serif">Price</h1>
                                <div>

                                    <label className="priceSection">
                                    <input type="checkbox" value ="100" className="checkbox" onChange={(event) => handleClickChange(event.target.value)} />
                                        <span>
                                            <p className="font-serif">Up to $100</p>                                    </span>
                                    </label>

                                    <div>
                                        <label className="priceSection " >
                                            <input type="checkbox" className="checkbox" />
                                            <span>
                                                <p className="font-serif">$100 to $200</p>                                    </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="priceSection" >
                                            <input type="checkbox" className="checkbox" />
                                            <span>
                                                <p className="font-serif">$200 above</p>                                    </span>
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </form>

                    </div>
                    <div className="product">
                        <Product products={product} />
                    </div>
                </div>
            
        </>)

}