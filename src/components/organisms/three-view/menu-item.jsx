import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MenuList from './menu-list'


const MenuItem = ({ item }) => {

    const [ displayCurrentChildren, setDisplayCurrentChildren ] = useState({})

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren, 
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
    }

        return (<li>
            <div style={{display: 'flex'}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={() => {handleToggleChildren(item.label)}}>{displayCurrentChildren[item.label] ? <span>-</span> : <span>+</span>}</span> : null
            }
            </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
            <MenuList list={item.children} />
            : null
        }
        </li>
    )
}

MenuItem.propTypes = {
    item: PropTypes.any
}

export default MenuItem