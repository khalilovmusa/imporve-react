import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Accordion from './components/organisms/accordion'
import RandomColor from './components/organisms/random-color'

createRoot(document.getElementById('root')).render(
  <>
   <Accordion />
   <RandomColor />
  </>
)
