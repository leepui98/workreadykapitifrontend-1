import React, { useState, setState } from 'react';
import { Fade } from '@material-ui/core';
import Page1 from './Page2';
import Page2 from './Page3';
import Page3 from './Page4';
import Page4 from './Page5';
import Page5 from './Page6';
import Page6 from './Page7';
import Page7 from './Page8';
import Page8 from './Page9';
import Page9 from './Page10';
import Page10 from './Page11';
import Page11 from './Page12';
import Page12 from './Page13';
import Page13 from './Page14';
import Page14 from './Page15';
import Page15 from './Page16';
import Page16 from './Page17/Page17';
import '../../App.css';

const WorkReadyPassportHandler = () => {

    const [step, setStep] = useState(1); //step will be used for switch cases between each conponentised page of the WRKP.

    //user information object held in useState
    const [userInformation, setUserInformation] = useState({ 
        profilePicture: null,
        fullName: '', 
        phoneNumber: '', 
        email: '', 
        employmentGoals: '', 
        personalWellness: '', 
        lifeSkills: '', 
        communication: '',
        academicAchievements: '',
        moneyManagement: '',
        drugFree: '',
        workExperience: '',
        teamWork: '',
        healthAndSafety: '',
        driversLicense: '',
        cv:'',
        characterReferences: '',
        interviewRegistrationForm: '',
     });

     const setUploadedImage = (image) => {
        setUserInformation({
            profilePicture: image
        })
    }

     //handle any change of the props, pass this method as a prop down to each child component page.
     const handleChange = e => {
        const { name, value } = e.target;
        setUserInformation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
                    <body>
                    <Page1
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    setUploadedImage={setUploadedImage}
                    />
                    </body>
                )
                
            case 2:
                return (
                    <body>
                    <Page2
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    />
                    </body>
                    )
            case 3:
                return (
                    <body>
                    <Page3
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
        
                    />
                    </body>
                    )
            
            case 4:
                return (
                    <body>
                    <Page4
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                
                    />
                    </body>)

            case 5:
                return (
                    <body>
                    <Page5
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    />
                    </body>)

            case 6:
                return (
                    <body>
                    <Page6
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}   
                    />
                    </body>)

            case 7:
                return (
                    <body>
                    <Page7
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}         
                    />
                    </body>)

            case 8:
                return (
                    <body>
                    <Page8
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}               
                    />
                    </body>)

            case 9:
                return (
                    <body>
                    <Page9
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                          
                    />
                    </body>)

            case 10:
                return (
                    <body>
                    <Page10
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                
                    />
                    </body>)

            case 11:
                return (
                    <body>
                    <Page11
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                        
                    />
                    </body>)

            case 12:
                return (
                    <body>
                    <Page12
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                                 
                    />
                    </body>)

            case 13:
                return (
                    <body>
                    <Page13
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />
                </body>)

            case 14:
                return (
                    <body>
                    <Page14
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />
                </body>)
            case 15:
                return (
                    <body>
                    <Page15
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />
                </body>)
            
            case 16:
                return (
                    <body>
                    <Page16
                    step={step}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
               />
               </body> )

        }
    }

export default WorkReadyPassportHandler;