import CustomTabs from "./index"
import React from 'react'

const TabsTest = () => {
    const tabs = [
        {
            label: 'Tab1',
            content: <div>Tab1 content</div>
        },
        {
            label: 'Tab2',
            content: <div>Tab2 content</div>
        },
        {
            label: 'Tab3',
            content: <div>Tab3 content</div>
        },
    ]

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex)
    }

    return(
        <CustomTabs tabsContent={tabs} onChange={handleChange} />
    )
}

export default TabsTest