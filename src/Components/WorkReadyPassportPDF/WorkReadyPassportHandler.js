import React, { useState, setState } from 'react';
import { Fade } from '@material-ui/core';
import Page1 from './Page2/Page2';
import Page2 from './Page3/Page3';
import Page3 from './Page4/Page4';
import Page4 from './Page5/Page5';
import Page5 from './Page6/Page6';
import Page6 from './Page7/Page7';
import Page7 from './Page8/Page8';
import Page8 from './Page9/Page9';
import Page9 from './Page10/Page10';
import Page10 from './Page11/Page11';
import Page11 from './Page12/Page12';
import Page12 from './Page13/Page13';
import Page13 from './Page14/Page14';
import Page14 from './Page15/Page15';
import Page15 from './Page16/Page16';
import Page16 from './Page17/Page17';

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
                    <Page1
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    setUploadedImage={setUploadedImage}
                    />
                )
                
            case 2:
                return (
                    <Page2
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    />
                    )
            case 3:
                return (
                    <Page3
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
        
                    />)
            
            case 4:
                return (
                    <Page4
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                
                    />)

            case 5:
                return (
                    <Page5
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                    />)

            case 6:
                return (
                    <Page6
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}   
                    />)

            case 7:
                return (
                    <Page7
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}         
                    />)

            case 8:
                return (
                    <Page8
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}               
                    />)

            case 9:
                return (
                    <Page9
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                          
                    />)

            case 10:
                return (
                    <Page10
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                
                    />)

            case 11:
                return (
                    <Page11
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                        
                    />)

            case 12:
                return (
                    <Page12
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}                                                 
                    />)

            case 13:
                return (
                    <Page13
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />)

            case 14:
                return (
                    <Page14
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />)
            case 15:
                return (
                    <Page15
                    step={step}
                    goForward={goForward}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
                />)
            
            case 16:
                return (
                    <Page16
                    step={step}
                    goBackward={goBackward}
                    userInformation={userInformation}
                    handleChange={handleChange}
               /> )

        }
    }

export default WorkReadyPassportHandler;