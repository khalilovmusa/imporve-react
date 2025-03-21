import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Accordion from './components/organisms/accordion'
import RandomColor from './components/organisms/random-color'
import StarRating from './components/organisms/star-rating'
import ImageSlider from './components/organisms/image-slider'
import LoadMore from './components/organisms/load-more'

createRoot(document.getElementById('root')).render(
  <>
   <Accordion />

   <RandomColor />

   <StarRating amountOfStars={10} />

   <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={'1'}/>

   <LoadMore />
  </>
)
