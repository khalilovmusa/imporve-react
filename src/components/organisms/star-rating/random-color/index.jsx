import React, { useState } from 'react'

const RandomColor = () => {

    const [ typeOfColor, setTypeOfColor ] = useState('hex')
    const [ color, setColor ] = useState('#000000')

    const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length)
    }

    const handleCreateHexColor = () => {
        const hex = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i=0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
    }

    const handleCreateRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    console.log(color)

  return (
    <div 
    className='container' 
    style={{ 
        background: color, 
        height: '100vh', 
        width: '100vw', 
        paddingTop: '20px' 
        }}>
        <button 
        onClick={ typeOfColor === 'hex' ? handleCreateHexColor : 
        handleCreateRgbColor}>Generate random color
        </button>
        <button  
        onClick={() => setTypeOfColor('hex')}>
            Generate HEX color
            </button>
        <button  
        onClick={() => setTypeOfColor('rgb')}>
            Generate RGB color
            </button>
        <div 
        style={{
            height: '70vh', 
            width: '100%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '40px', 
            fontWeight: 'bold'}}>
            {
                color
            }
        </div>
    </div>
  ) 
}

export default RandomColor