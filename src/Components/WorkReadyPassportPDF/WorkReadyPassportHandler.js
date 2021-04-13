import React, { useState } from 'react';
import Page1 from './Page2/Page2';
import Page2 from './Page3/Page3';


const WorkReadyPassportHandler = () => {

    const [step, setStep] = useState(1); //step will be used for switch cases between each conponentised page of the WRKP. 

    //Increase step by 1 to go to next page/switch case
    function goForward(nextMove) {
        setStep(nextMove => nextMove + 1)
    }

    //Decrease step by 1 to go to previous page,switch case
    function goBackward(nextMove) {
        setStep(nextMove => nextMove - 1)

    }
        // Switch case for displaying each page, which takes in step value as a parameter to cycle between pages.
        switch (step) {

            case 1:
                return (
                    <Page1
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    />
                )
                
            case 2:
                return (
                    <Page2
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}

                    />)
                

        }
    }

export default WorkReadyPassportHandler;