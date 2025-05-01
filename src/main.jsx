import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Accordion from './components/organisms/accordion'
import RandomColor from './components/organisms/random-color'
import StarRating from './components/organisms/star-rating'
import ImageSlider from './components/organisms/image-slider'
import LoadMore from './components/organisms/load-more'
import ThreeView from './components/organisms/three-view'
import { sideMenu } from './store/data/threeView'
import QrCodeGenerator from './components/organisms/qr-code-generator'
import SetTheme from './components/organisms/change-theme'
import ScrollIndicator from './components/organisms/scroll-indicator'
import CustomTabs from './components/organisms/tabs'
import TabsTest from './components/organisms/tabs/tabs-test'
import Popup from './components/organisms/popup/Popup'
import PopupTest from './components/organisms/popup/popup-test'
import GithubProfileFinder from './components/organisms/github-profile-finder'
import SearchAutocomplete from './components/organisms/search-autocomplete/SearchAutocomplete'

createRoot(document.getElementById('root')).render(
  <>
   {/* <Accordion />

   <RandomColor />

   <StarRating amountOfStars={10} />

   <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={'1'}/>

   <LoadMore />

   <ThreeView threeView={sideMenu} />

   <QrCodeGenerator />

   <SetTheme />

   <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

   <CustomTabs /> 

   <TabsTest />

   <PopupTest />

   <GithubProfileFinder /> */}

   <SearchAutocomplete />
  </>
)
