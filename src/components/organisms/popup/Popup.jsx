
import "./Popup.css"
import React from 'react'

const Popup = ({ id, header, body , footer, onClose}) => {
  return (
    <div id={id || "Modal"} className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <span onClick={onClose} className="close-modal-icon">
                    &times;
                </span>
                <h2>{header ? header : "Header content here"}</h2>
            </div>
            <div className="modal-body">
                {body? body : <p>Body content here</p>}
            </div>
            <div className="modal-footer">
                {
                    footer? footer : <h2>Footer</h2>
                }
            </div>
        </div>
    </div>
  )
}

export default Popup