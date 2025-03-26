import React from 'react'
import MenuList from './menu-list'
import propTypes from 'prop-types'
import "./threeView.css"

const ThreeView = ({ threeView = [] }) => {
  return (
    <div className='three-view-container'>
      <MenuList list={threeView} />
    </div>
  )
}

ThreeView.propTypes = {
  threeView: propTypes.array
}

export default ThreeView