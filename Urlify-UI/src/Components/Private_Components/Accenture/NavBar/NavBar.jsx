import React, { useEffect, useState } from 'react'
import '../../../../Style/Private_Style/NavBar.css'
import { AiFillNotification } from 'react-icons/ai';
import NavBarDropDown from './NavBarDropDown';
import { FaArrowRightFromBracket, FaArrowRightToBracket } from 'react-icons/fa6';
import Notifications from './Notifications';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    // JWT Token
    const access_token = Cookies.get('access_token');

    // Navigate Hook
    const navigate = useNavigate();

// States for temporary storage's

    const [searchResultActive, setSearchResultActive] = useState(false);

    //Store the searchResult
    const [storeSearchResult, setStoreSearchResult] = useState([]);

    // Store the searchField Data in state
    const [searchField, setSearchField] = useState({
        data: ''
    });

    const [notificationCount, setNotificationCount] = useState(7);

    const [conformCheckInActivated, setConformCheckInActivated] = useState(false);

    const [conformCheckOutActivated, setConformCheckOutActivated] = useState(false);

    const [userData, setUserData] = useState('');

    // Change to Green when checkIn Button Clicked
    const [arrowRightToBracketStyle, setArrowRightToBracketStyle] = useState(null);

    const [checkInBracketStyleColor, setCheckInBracketStyleColor] = useState(`text-black`);

    const [checkOutBracketStyleColor, setCheckOutBracketStyleColor] = useState(`text-black`);

    const [checkOutSymbolStyle, setCheckOutSymbolStyle] = useState(`pointer-events-none opacity-[0.6]`);

    const [notificationActive, setNotificationActive] = useState(false);

    const [profileViewTurnedOn, setProfileViewTurnedOn] = useState(false);

    // To store the profile pic imageSrc
    const [imageSrc, setImageSrc] = useState(null);

// Functions

    // Check In Arrow Function
    const arrowRightToBracketFunction = () => {

        if ( conformCheckInActivated ){

            setConformCheckInActivated(false);

            setArrowRightToBracketStyle(null);

            setCheckInBracketStyleColor(`text-black`);

        } else {

            setConformCheckInActivated(true);

            setCheckInBracketStyleColor(`text-green-700`);

            setNotificationActive(false);

            setProfileViewTurnedOn(false)

        }

    }

    // Check In Function
    const conformCheckInFunction = () => {

        if ( checkOutSymbolStyle === `pointer-events-none opacity-[0.6]` ){

            setCheckOutSymbolStyle(`opacity-[1]`);

            setConformCheckInActivated(false)

            setArrowRightToBracketStyle(`pointer-events-none opacity-[0.6]`)

            setCheckInBracketStyleColor(`text-black`);
            
        } else {

            setCheckOutSymbolStyle(`pointer-events-none opacity-[0.6]`);

        }
        
    }

    // Check out Arrow Function
    const conformCheckOutNavFunction = () => {

        if (conformCheckOutActivated) {

            setConformCheckOutActivated(false);

            setCheckOutSymbolStyle(`opacity-[1]`);

            setCheckOutBracketStyleColor(`text-black`);

        } else {

            setConformCheckOutActivated(true);
            
            setCheckOutSymbolStyle(`opacity-[1]`);

            setCheckOutBracketStyleColor(`text-red-800`);

            setNotificationActive(false);

            setProfileViewTurnedOn(false)

        }


    }

    // Check Out Function
    const conformCheckOutFunction = () => {

        setArrowRightToBracketStyle(`opacity-[1]`)

        setConformCheckOutActivated(false);

        setCheckOutSymbolStyle(`pointer-events-none opacity-[0.6]`);

        setCheckOutBracketStyleColor(`text-black`);

    }

    // Notification Function
    const notificationFunction = () => {

        if(notificationActive) {

            setNotificationActive(false);

        } else {

            setNotificationActive(true);

            setProfileViewTurnedOn(false)

            setConformCheckOutActivated(false)

            setConformCheckInActivated(false)

            setCheckOutBracketStyleColor(`text-black`);

            setCheckInBracketStyleColor(`text-black`);

        }

    }

    // Profile Function
    const profileNavFunction = () => {

        if ( profileViewTurnedOn ){

            setProfileViewTurnedOn(false)

        } else {

            setProfileViewTurnedOn(true)

            setNotificationActive(false)

            setConformCheckOutActivated(false)

            setConformCheckInActivated(false)

            setCheckOutBracketStyleColor(`text-black`);

            setCheckInBracketStyleColor(`text-black`);

        }

    }

    // Handle errors
    const handleFetchError = (error) => {
        
        if (error.response) {
        
            if (error.response.status === 403) {
        
                console.log(error.response.data);
        
                // Cookies.remove('access_token');
        
                // window.open('http://localtest.me:7778', '_self');
        
            } else {
        
                console.log(error);
        
            }
        
        } else {
        
            console.error('Error fetching data', error);
        
        }
    
    };

    const handleSearchFunction = (e) => {

        if ( e.key === 'Enter' ){

            setSearchResultActive(true);

            const fetchSearchData = async () => {

                try{

                    const response = await axios.post('http://localhost:7777/api/v1/search/searchUser', {
                        searchObject: searchField.data
                    }, {
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    })

                    if ( response.status === 200 ){

                        const searchResult = response.data;

                        setStoreSearchResult(searchResult);

                    }

                }catch(error){

                    handleFetchError(error);

                }

            }

            fetchSearchData();

        }

    }

    const handleInputFunction = (e) => {

        const value = e.target.value;

        setSearchField({...searchField, [e.target.name] : value});

    }

    const fetchUserData = async () => {

        try{

            const response = await axios.post('http://localhost:7777/api/v1/common/getUserObject', {
                accessToken: access_token
            }, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            } )

            if ( response.status === 200 ){

                const userData = response.data;

                setUserData(userData);   

                fetchImage(userData);

            }

        }catch (error){

            if ( error.response ){

                if ( error.response.status === 403 ){

                    // Cookies.remove('access_token', {
                    //     path: '/',
                    //     domain: '.localtest.me'
                    // })

                    // window.open('http://localtest.me:7778/', '_self')

                }

            }

        }

    }

    // Function to fetch profile pic
    const fetchImage = async (userData) => {

        setImageSrc(null);

        try{

            const response = await axios.get(`http://localhost:7777/api/v1/files/display/${userData.profilePathUrl}`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                },
                responseType: 'blob'
            });

            if( response.status === 200 ){

                const imageBlob = URL.createObjectURL(response.data);

                setImageSrc(imageBlob);

            }

        }catch(error){

            handleFetchError(error);

            setImageSrc(null);

        }

    }

// UseEffect Hook

    useEffect(() => {

        if ( !access_token ) {

            // window.open('http://localtest.me:7778/', "_self");

        } else {

            fetchUserData();

            if ( notificationCount === 0 ) {

                setNotificationCount(null);
    
            }
    
            if ( notificationCount > 9 ) {
    
                setNotificationCount("9+");
    
            }

        }
        
    }, []);

    return (

        <>
        
            <div className="h-[60px] bg-[#66B2FF] flex justify-between items-center fixed top-0 right-0 left-0 z-50">

                <div className="mx-10 flex shrink-0 items-center">

                    <img 
                        src='/Accenture_Logo.webp'
                        className='h-[30px] w-auto'
                    />

                </div>

                <div className="flex-1 ml-[550px] max-1400:ml-[300px] max-1200:ml-[150px] max-xl:ml-[100px] max-lg:ml-[0px] items-center relative">

                    <input 
                        type='text'
                        className='px-8 rounded-xl leading-8 focus:outline-none w-full max-w-[500px] min-w-[300px]'
                        placeholder='Search people'
                        onKeyDown={(e) => handleSearchFunction(e)}
                        name='data'
                        value={searchField.data}
                        onChange={(e) => handleInputFunction(e)}
                    />

                    <IoIosSearch
                        className='absolute text-xl rounded-[50%] left-2 top-[6px]'
                    />

                    {searchResultActive && (

                        <>

                            <button
                                className='bg-red-500 text-white font-semibold text-md px-1 rounded-md ml-2'
                                onClick={() => {

                                    setSearchResultActive(false);

                                }}  
                            > Close</button>

                            {storeSearchResult && storeSearchResult.length <= 0 && (

                                <div className="absolute left-0 right-0 top-[100%] bg-white w-full flex-1 max-w-[500px] min-w-[300px] h-20 flex justify-center items-center rounded-xl">

                                    No Person Found       

                                </div>

                            )}

                            {storeSearchResult && storeSearchResult.length > 0 && (

                                <div className="absolute left-0 right-0 top-[100%] bg-white w-full flex-1 max-w-[500px] min-w-[300px] h-auto block rounded-lg">

                                    {storeSearchResult.map((searchResult) => {

                                        return (

                                                <div 
                                                    key={searchResult.userId} 
                                                    className="flex px-5 leading-7 py-2 border-b-2 border-gray-200 space-x-3 hover:bg-gray-300 active:bg-gray-500"
                                                    onClick={() => {
                                                        
                                                        navigate(`/accenture-profile/${searchResult.userId}`)

                                                        setSearchResultActive(false);

                                                        setSearchField({
                                                            data: ''
                                                        })
                                                    
                                                    }}
                                                >

                                                    <div className="block">

                                                        <div className="">

                                                        {searchResult.userName}

                                                        </div>

                                                        <div className="">

                                                        {searchResult.userEmail}

                                                        </div>

                                                    </div>

                                                </div>

                                        )

                                    })}

                                </div>

                            )}

                        </>

                    )}

                </div>

                <div className="flex items-center mx-10 space-x-7">

                    <div className="relative">

                        <FaArrowRightToBracket 
                            className={`h-[35px] w-[35px] ${arrowRightToBracketStyle} ${checkInBracketStyleColor} bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] conformCheckIn`} 
                            onClick={arrowRightToBracketFunction}
                        />

                        {conformCheckInActivated && (

                            <div className="absolute top-[47px] right-0 overflow-hidden h-auto rounded-b-2xl bg-white">

                                <ul
                                    className=''                        
                                >

                                    <li
                                        className='flex justify-center items-center w-full py-3 min-w-[200px] rounded-xl hover:bg-gray-200 active:opacity-[0.6]'
                                        onClick={conformCheckInFunction}
                                    >

                                        Conform Check In

                                    </li>

                                </ul>

                            </div>

                        )}

                    </div>

                    <div className="relative">

                        <FaArrowRightFromBracket 
                            className={`h-[35px] w-[35px] bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] conformCheckOut cursor-pointer ${checkOutSymbolStyle} ${checkOutBracketStyleColor}`} 
                            onClick={conformCheckOutNavFunction}
                        />

                        {conformCheckOutActivated && (

                            <div className="absolute top-[47px] right-0 overflow-hidden h-auto rounded-b-2xl bg-white">

                                <ul
                                    className=''                        
                                >

                                    <li
                                        className='flex justify-center items-center w-full py-3 min-w-[200px] rounded-xl hover:bg-gray-200 active:opacity-[0.6]'
                                        // onClick={conformCheckOutFunction}
                                        onClick={conformCheckOutFunction}
                                    >

                                        Conform Check Out

                                    </li>

                                </ul>

                            </div>

                        )}

                    </div>

                    <div 
                        className="relative"
                        onClick={notificationFunction}
                    >

                        <AiFillNotification
                            className='h-[35px] w-[35px] bg-[#F0F2F5] px-2 py-1 rounded-[50%] hover:opacity-[0.8] active:opacity-[0.6] duration-300'
                        />

                        <div className="absolute top-[-7px] right-[-7px] rounded-[50%] text-[12px] font-semibold notificationClass bg-orange-500 px-[5px] text-white">
   

                        {notificationCount}

                        {notificationActive && (

                            <Notifications />

                        )}

                        </div>

                    </div>

                    <div 
                        className="flex justify-center items-center shrink-0 space-x-3 hover:opacity-[0.68] active:opacity-100 duration-300"
                        onClick={profileNavFunction}
                    >

                        {imageSrc ? (

                            <img 
                                src={imageSrc}
                                className='h-[40px] w-auto object-cover rounded-[50%]'
                            />

                        ): (

                            <img 
                                src='/emptyuser.jpeg'
                                className='h-[40px] w-auto object-cover rounded-[50%]'
                            />

                        )}

                    </div>

                    {profileViewTurnedOn && (

                        <NavBarDropDown 
                        userData = {userData}
                        />

                    )}

                </div>

            </div>

        </>

    )

}

export default NavBar