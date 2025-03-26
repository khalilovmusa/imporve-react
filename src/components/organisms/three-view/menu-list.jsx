import MenuItem from "./menu-item"
import PropTypes from 'prop-types'
import React from 'react'

const MenuList = ({ list = []}) => {
    return (<ul className="menu-list-container">
        {
            list && list.length ? 
            list.map(listItem => <MenuItem key={listItem} item={listItem} />)
            : null
        }
    </ul>)
}

MenuList.propTypes = {
    list: PropTypes.array
}

export default MenuList