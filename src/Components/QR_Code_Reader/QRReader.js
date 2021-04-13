import { Height } from '@material-ui/icons';
import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

const QRReader = () => {
        const [result, setResult] = useState('');

        // if data is handled, set the result string to the data string
    const handleScan = (data) => {
      if (data) {
          setResult(
              data
              );
      }
    }
    // Console log any errors
    const handleError = err => {
      console.error(err)
    }

      return (
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '30%'}}
          />
          <p>{result}</p>
        </div>
      )
    
  }

  export default QRReader;