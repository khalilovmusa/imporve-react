import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './scroll.css'

const ScrollIndicator = ({url}) => {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState('')
    const [ scrollPercentage, setScrollPercentage ] = useState(0);

    async function fetchData(getUrl){
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();

            if(data && data.products && data.products.length > 0){
                setData(data.products)
                setLoading(false)
            }

            console.log(data)
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    const handleScrollPercentage = () => {
        const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((scrolledHeight/height)*100)
    }

    useEffect(() => {
        fetchData(url)
    },[url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return() => {
            window.removeEventListener('scroll', () => {})
        }
    },[])

    return(
        <div>
            {
                loading ? <div>Loading indicator</div> 
                : errorMsg ? <div>An error ocurred{errorMsg}</div> 
                : <div className='top-scroll-container'>
                <div className='scroll-progress-tracking-container'>
                  <div className='current-progress-bar' style={{width: `${scrollPercentage}%`}}></div>
                </div>
              </div>
            }
         <h1>Custom Scroll Indicator</h1> 
          <div className=''>
            {
                data && data.length > 0 ? 
                data.map((dataItem) => (
                    <p key={dataItem.id}>{dataItem.title}</p>
                ))
                : null
            }
          </div>
        </div>
    )
}

ScrollIndicator.propTypes = {
    url: PropTypes.string
}

export default ScrollIndicator;