import React, { useEffect, useState } from 'react'
import './styles.css'

const LoadMore = () => {

    const [ loading, setLoading ] = useState(false)
    const [ products, setProducts ] = useState([])
    const [ count, setCount ] = useState(0)

    async function fetchProducts() {
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}&select=title,price`);
            if(!response.ok){
                throw new Error(`Response status error: ${response.status}`)
            }

            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProducts((prevData) => [...prevData, ...data.products])
                setLoading(false)
            }

            fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price').then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
            })
        }catch(e){
            setLoading(false)
            return(
                <div>There is an error{e}</div>
            )
        }
    }

    useEffect(() => {
        fetchProducts()
    },[count])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

  return (
    <div className='products-container'>
        {
            products && products.length ? 
            products.map((item) => (<div className='product-item' key={item.id}>Name:{item.title} <br/> price: {item.price}</div>))
            : null
        } 
    <button onClick={() => setCount((prev) => prev+1)}>
        Load more
    </button>
    </div>
  )
}

export default LoadMore