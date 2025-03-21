import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'
import PropTypes from 'prop-types'

const ImageSlider = ({ url, limit = 5, page = 1 }) => {

    const [ images, setImages ] = useState([]);
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    async function fetchImages (getUrl){
        try{
            setLoading(true)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await res.json()

            if(data){
                setImages(data)
                setLoading(false)
            }

        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length ? 0 : currentSlide + 1)
    }

    console.log(images)

    useEffect(() => {
        if(url !== '') fetchImages(url)
    },[url])

    if(loading) {
        return <div>Loading...</div>
    }

    if(errorMsg !== null) {
        return <div>An error ocurred {errorMsg}</div>
    }

    return(
        <div className='image-container'>
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {
                images && images.length ?
                images.map((imageItem , index) => (
                    <img 
                    key={imageItem.id} 
                    alt={imageItem.download_url} 
                    src={imageItem.download_url} 
                    className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                ))
            : null }
            <span className='circle-indicators'>
                {
                    images && images.length ? images.map((_, index) => (
                        <button
                         key={index} 
                        className={ currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                        onClick={() => setCurrentSlide(index)}
                        >
                        </button> )) : null
                }
            </span>
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        </div>
    )
}

ImageSlider.propTypes = {
    url: PropTypes.string.isRequired, // url mütləq olmalıdır
    limit: PropTypes.number,
    page: PropTypes.number,
  };

export default ImageSlider