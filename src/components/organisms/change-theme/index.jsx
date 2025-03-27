import React from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import './theme.css'

const SetTheme = () => {

    const [ theme, setTheme ] = useLocalStorage('theme', "dark")
    
    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    }

    return(
        <div className='light-dark-mode' data-theme={theme}>
           <div className='theme-container'>
           <p>Hello World!</p>
           <button onClick={() => handleToggleTheme()}>Change Theme</button>
           </div>
        </div>
    )
}

export default SetTheme