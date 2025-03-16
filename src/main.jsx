import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Accordion from './components/organisms/accordion'

createRoot(document.getElementById('root')).render(
  <>
   <Accordion />
  </>
)
