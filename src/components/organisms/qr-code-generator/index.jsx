import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {

    const [ qrCode, setQrCode ] = useState('')
    const [ input, setInput ] = useState('')

    const handleGenerateQrCode = () => {
        setQrCode(input)
    }

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Qr code generator</h1>
            <div>
                <input 
                style={{
                    width: '350px',
                    height: '30px',
                    borderRadius: '8px',
                    outline: 'none',
                    padding: '5px 10px',
                    letterSpacing: '.1rem',
                    marginRight: '10px'
                }}
                onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here" />
                <button disabled={input && input.trim() !== '' ? false : true} onClick={() => handleGenerateQrCode()}>
                    Generate
                </button>
                <div style={{
                    padding: '20px'
                }}>
                    <QRCode 
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                    />
                </div>
            </div>
        </div>
    )
}

export default QrCodeGenerator