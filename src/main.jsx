import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Accordion from './components/organisms/accordion'
import RandomColor from './components/organisms/star-rating/random-color'
import StarRating from './components/organisms/star-rating'

createRoot(document.getElementById('root')).render(
  <>
   <Accordion />
   <RandomColor />
   <StarRating amountOfStars={10} />
  </>
)
