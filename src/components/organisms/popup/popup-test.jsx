import React, { useState } from 'react'
import Popup from './Popup'

const PopupTest = () => {
    const [ showModalPopup, setShowModalPopup ] = useState(false)

    const handleToggleModalPopup = () => {
        setShowModalPopup((prevState) => !prevState)
        console.log(showModalPopup)
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
            showModalPopup && <Popup onClose={onClose} body={<div>This is a custom body content</div>} />
        }
    </div>
  )
}

export default PopupTest