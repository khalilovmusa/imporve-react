import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./tabs.css"

const CustomTabs = ({ tabsContent = [], onChange }) => {

    const [ currentTabIndex, setCurrentTabIndex ] = useState(0)

    const handleOnClick = (index) => {
        setCurrentTabIndex(index)
        onChange(index)
    }

    return(
        <div className="tabs-wrapper">
            <div className="tabs-heading">
            {
               tabsContent.map((tabItem, index) => (
                <div onClick={() => handleOnClick(index)} key={tabItem.label} className={`tab-item ${currentTabIndex === index ? "active" : ""}`}>
                    {tabItem.label}
                </div>
            ))
            }
            </div>
            <div className="tabs-content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default CustomTabs