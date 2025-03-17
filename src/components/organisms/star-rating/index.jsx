import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'
import PropTypes from 'prop-types'


const StarRating = ({ amountOfStars = 5}) => {

    const [ rating, setRating ] = useState(0)
    const [ hover, setHover ] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = () => {
       setHover(rating)
    }

    return(
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            {
                [...Array(amountOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    size={40}
                    />
                })
            }
        </div>
    )
}

StarRating.propTypes  = {
    amountOfStars: PropTypes.number,
 };

export default StarRating