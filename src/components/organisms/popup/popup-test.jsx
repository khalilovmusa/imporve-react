import React, { useState } from 'react'
import Popup from './Popup'

const PopupTest = () => {
    const [ showModalPopup, setShowModalPopup ] = useState(false)

    const handleToggleModalPopup = () => {
        setShowModalPopup((prevState) => !prevState)
    }

    const onClose = () => {
        setShowModalPopup(false)
    }

  return (
    <div>
        <button onClick={handleToggleModalPopup}>
            Open modal popup
        </button>
        {
            showModalPopup && <Popup onClose={onClose} header={<h4 style={{color: 'red', }}>This is a header content custom version</h4>} body={<div>This is a custom body content</div>} />
        }
    </div>
  )
}

export default PopupTest