import React, { useEffect, useState } from 'react'
import '../../../../Style/Private_Style/NavBar.css'
import { AiFillNotification } from 'react-icons/ai';
import NavBarDropDown from './NavBarDropDown';
import { FaArrowRightFromBracket, FaArrowRightToBracket } from 'react-icons/fa6';
import Notifications from './Notifications';

const NavBar = () => {

    const [notificationCount, setNotificationCount] = useState(7);

    const [ conformCheckIn, setConformCheckIn ] = useState('Conform Check In');

    const [ conformCheckOut, setConformCheckOut ] = useState('Checked out');

    const profileNavFunction = () => {

        const profileNavBarHide = document.querySelector('.profileNavBarHide');

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');

        const profileNavBarHide3 = document.querySelector('.profileNavBarHide3');

        const notificationDropDown = document.querySelector('.notificationDropDown');

        const profileNavBar1 = document.querySelector('.profileNavBar1');

        const conformCheckIn = document.querySelector('.conformCheckIn');

        const conformCheckOut = document.querySelector('.conformCheckOut');

        if ( profileNavBarHide.style.height === '0px' || profileNavBarHide.style.height === '' ) {

            profileNavBarHide2.style.height = '0px';

            profileNavBarHide2.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)';

            profileNavBarHide3.style.height = '0px';

            profileNavBarHide3.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            notificationDropDown.style.height = '0px';

            profileNavBar1.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'

            conformCheckIn.style.color = 'black';

            conformCheckOut.style.color = 'black';

            setTimeout(() => {

                profileNavBarHide.style.height = '360px';

                profileNavBarHide.style.boxShadow = '1px  1px 3px 1px rgb(149, 147, 147)'; 

            }, 300)

        } else {

            profileNavBarHide.style.height = '0px';

            profileNavBarHide.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

        }

    }

    const conformCheckInNavFunction = () => {

        const profileNavBarHide = document.querySelector('.profileNavBarHide');

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');

        const profileNavBarHide3 = document.querySelector('.profileNavBarHide3');

        const conformCheckIn = document.querySelector('.conformCheckIn')

        const notificationDropDown = document.querySelector('.notificationDropDown');

        const profileNavBar1 = document.querySelector('.profileNavBar1');

        const conformCheckOut = document.querySelector('.conformCheckOut');

        if ( profileNavBarHide2.style.height === '0px' || profileNavBarHide2.style.height === '' ) {

            profileNavBarHide.style.height = '0px';

            profileNavBarHide.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)';

            profileNavBarHide3.style.height = '0px';

            profileNavBarHide3.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            notificationDropDown.style.height = '0px';

            profileNavBar1.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'

            conformCheckOut.style.color = 'black';

            setTimeout(() => {

                profileNavBarHide2.style.height = '50px';

                profileNavBarHide2.style.boxShadow = '1px  1px 3px 1px rgb(149, 147, 147)'; 

                conformCheckIn.style.color = 'green';

            }, 300)

        } else {

            profileNavBarHide2.style.height = '0px';

            profileNavBarHide2.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            conformCheckIn.style.color = 'black';

        }

    }

    const conformCheckOutNavFunction = () => {

        const profileNavBarHide = document.querySelector('.profileNavBarHide');

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');

        const profileNavBarHide3 = document.querySelector('.profileNavBarHide3');

        const notificationDropDown = document.querySelector('.notificationDropDown');

        const profileNavBar1 = document.querySelector('.profileNavBar1');

        const conformCheckOut = document.querySelector('.conformCheckOut')

        const conformCheckIn = document.querySelector('.conformCheckIn')

        if ( profileNavBarHide3.style.height === '0px' || profileNavBarHide3.style.height === '' ) {

            profileNavBarHide2.style.height = '0px';

            profileNavBarHide2.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            profileNavBarHide.style.height = '0px';

            profileNavBarHide.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)';

            notificationDropDown.style.height = '0px';

            profileNavBar1.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'

            conformCheckOut.style.color = 'red';

            conformCheckIn.style.color = 'black';

           setTimeout(() => {

                profileNavBarHide3.style.height = '50px';

                profileNavBarHide3.style.boxShadow = '1px  1px 3px 1px rgb(149, 147, 147)'; 

           }, 300)

        } else {

            profileNavBarHide3.style.height = '0px';

            profileNavBarHide3.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            conformCheckOut.style.color = 'black';

        }

    }

    const notificationFunction = () => {

        const profileNavBarHide = document.querySelector('.profileNavBarHide');

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');

        const profileNavBarHide3 = document.querySelector('.profileNavBarHide3');

        const notificationDropDown = document.querySelector('.notificationDropDown');

        const profileNavBar1 = document.querySelector('.profileNavBar1');

        const conformCheckIn = document.querySelector('.conformCheckIn');

        const conformCheckOut = document.querySelector('.conformCheckOut');

        if ( notificationDropDown.style.height === '0px' || notificationDropDown.style.height === '' ){

            profileNavBarHide.style.height = '0px';

            profileNavBarHide.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)';

            profileNavBarHide2.style.height = '0px';

            profileNavBarHide2.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)';

            profileNavBarHide3.style.height = '0px';

            profileNavBarHide3.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            conformCheckIn.style.color = 'black';

            conformCheckOut.style.color = 'black';

            setTimeout(() => {

                notificationDropDown.style.height = '374px';

                profileNavBar1.style.boxShadow = '1px  1px 3px 2px rgb(149, 147, 147)';

            }, 300);

        }else {

            notificationDropDown.style.height = '0px';

            profileNavBar1.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'

        }

    }

    const conformCheckInFunction = () => {

        const conformCheckIn = document.querySelector('.conformCheckIn');

        const conformCheckOut = document.querySelector('.conformCheckOut');

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');

        if ( conformCheckIn === 'Checked In') {

            setConformCheckIn('Conform Check In')

            conformCheckOut.style.opacity = '0.6';

            conformCheckOut.style.pointerEvents = 'none';

            profileNavBarHide2.style.height = '50px';

        } else {

            conformCheckOut.style.opacity = '1';

            conformCheckOut.style.pointerEvents = 'auto';

            conformCheckIn.style.pointerEvents = 'none';

            conformCheckIn.style.opacity = '0.6';

            profileNavBarHide2.style.height = '0px';

            conformCheckIn.style.color = 'black';

            profileNavBarHide2.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

            setTimeout(() => {

                setConformCheckOut('Conform Check Out');
            
                setConformCheckIn(`Checked In`)

            }, 300);

        }

    }

    const conformCheckOutFunction = () => {

        const profileNavBarHide2 = document.querySelector('.profileNavBarHide2');
        
        const profileNavBarHide3 = document.querySelector('.profileNavBarHide3');

        const conformCheckOut = document.querySelector('.conformCheckOut');

        const conformCheckIn = document.querySelector('.conformCheckIn');

        conformCheckOut.style.color = 'black';

        conformCheckOut.style.opacity = '0.6';

        profileNavBarHide3.style.height = '0px';

        conformCheckOut.style.pointerEvents = 'none';

        profileNavBarHide3.style.boxShadow = '1px  1px 3px 0px rgb(149, 147, 147)'; 

        conformCheckIn.style.opacity = '1';

        conformCheckIn.style.pointerEvents = 'auto';

        setTimeout(() => {

            setConformCheckOut('Checked Out');

            setConformCheckIn('Conform Check In')

        }, 300)

    }

    useEffect(() => {

        if ( notificationCount <= 0 ) {

            const notification = document.querySelector('.notificationClass');

            notification.style.display = 'none';

        }

        if ( notificationCount > 9 ) {

            setNotificationCount("9+");

            const notification = document.querySelector('.notificationClass');

            notification.style.right = '-16px';

            notification.style.paddingRight = '4px';

            notification.style.paddingLeft = '4px';

            notification.style.paddingTop = '2px';

            notification.style.paddingBottom = '2px';

            notification.style.fontSize = '12px';

            notification.style.backgroundColor = '#c93030';

        }

    }, []);

    return (

        <>
        
            <div className="h-[60px] bg-[#66B2FF] flex justify-between items-center fixed top-0 right-0 left-0 z-50">

                <div className="mx-10 flex items-center">

                    <img 
                        src='/Company_Logo.webp'
                        className='h-[27px] w-auto'
                    />

                    <div className="text-[25px] mx-3">

                    |

                    </div>

                    <img 
                        src='/Wipro_Logo.webp'
                        className='h-[50px] w-auto'
                    />

                </div>

                <div className="flex items-center mx-10 space-x-7">

                    <div className="relative">

                        <FaArrowRightToBracket 
                            className='h-[35px] w-[35px] bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] transition-all duration-300 conformCheckIn' 
                            onClick={conformCheckInNavFunction}
                        />

                        <div className="absolute top-[47px] right-0 overflow-hidden h-0 transition-all duration-300 profileNavBarHide2 profileNavBar2 rounded-b-2xl">

                            <ul
                                className=''                        
                            >

                                <li
                                    className='flex justify-center items-center w-full py-3 min-w-[200px] rounded-xl hover:bg-gray-200 active:opacity-[0.6] transition-all'
                                    onClick={conformCheckInFunction}
                                >

                                    {conformCheckIn}

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="relative">

                        <FaArrowRightFromBracket 
                            className='h-[35px] w-[35px] bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] transition-all duration-300 conformCheckOut pointer-events-none opacity-[0.6]' 
                            onClick={conformCheckOutNavFunction}
                        />

                        <div className="absolute top-[47px] right-0 overflow-hidden h-0 transition-all duration-300 profileNavBarHide3 profileNavBar3 rounded-b-2xl">

                            <ul
                                className=''                        
                            >

                                <li
                                    className='flex justify-center items-center w-full py-3 min-w-[200px] rounded-xl hover:bg-gray-200 active:opacity-[0.6] transition-all'
                                    onClick={conformCheckOutFunction}
                                >

                                    {conformCheckOut}

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div 
                        className="relative"
                        onClick={notificationFunction}
                    >

                        <AiFillNotification
                            className='h-[35px] w-[35px] bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] transition-all duration-300'
                        />

                        <div className="absolute top-[-7px] right-[-7px] rounded-[50%] text-[12px] font-semibold notificationClass bg-orange-500 px-[5px] text-white">
   

                        {notificationCount}

                        <Notifications />

                        </div>

                    </div>

                    <div 
                        className="flex justify-center items-center space-x-3 hover:opacity-[0.68] active:opacity-100 transition-all duration-300"
                        onClick={profileNavFunction}
                    >

                        <img 
                            src='/testuser.png'
                            className='h-[40px] w-auto object-cover rounded-[50%]'
                        />

                        <p
                            className='font-semibold text-base'
                        >

                            Gokul

                        </p>

                    </div>

                    <NavBarDropDown />

                </div>

            </div>

        </>

    )

}

export default NavBar