import React from 'react'
import { AiFillNotification } from 'react-icons/ai'
import { IoIosSettings, IoMdHelpCircle } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
import Cookies from 'js-cookie'
import axios from 'axios'

const NavBarDropDown = ({userData}) => {

    const logoutFunction = async () => {

        const access_token = Cookies.get('access_token');

        try{

            const response = await axios.post('http://localhost:7777/api/v1/logout', {
                headers: {
                    'Authorization': `Bearer ${access_token}`   
                }
            });

            if ( response.status === 200 ) {

                Cookies.remove('access_token', { path: '/', domain: '.localtest.me' });

                window.open('http://localtest.me:7778', '_self')

            }

        }catch(error) {

            if ( error.response ){

                if ( error.response.status === 403 ){

                    console.log("Something went wrong");

                }

            }

        }

    }

    return (

        <>
        
            <div className="absolute top-[60px] right-3 overflow-hidden h-auto transition-all duration-300 profileNavBarHide profileNavBar rounded-b-2xl bg-white">

                <ul
                    className='py-2 px-5 '                        
                >

                    <li
                        className='flex items-center space-x-2 w-full profileNavBar py-3 min-w-[300px] rounded-xl hover:bg-gray-200 active:opacity-[0.6] transition-all duration-300'
                    >

                        <img 
                            src='/testuser.png'
                            className='h-[40px] w-auto object-cover rounded-[50%] ml-5'
                        />

                        <div className="block">

                            <p
                                className=''
                            > {userData.firstName} {userData.lastName}</p>

                            <p
                                className='text-[10px]'
                            >{userData.role}</p>

                        </div>

                    </li>

                    <li
                        className='mt-2 flex items-center space-x-2 w-full py-3 min-w-[300px] hover:bg-gray-200 transition-all duration-300 px-5 rounded-xl active:opacity-[0.6]'
                    >  
                    
                        <div className="">

                            <AiFillNotification 
                                className='h-[30px] w-auto bg-gray-400 rounded-[50%] p-[5px]'
                            />

                        </div>

                        <div className="">

                            Notification
                            
                        </div>
                    
                    </li>

                    <li
                        className='flex items-center space-x-2 w-full py-3 min-w-[300px] hover:bg-gray-200 transition-all duration-300 px-5 rounded-xl active:opacity-[0.6]'
                    > 

                        <div className="">

                            <IoIosSettings
                                className='h-[30px] w-auto bg-gray-400 rounded-[50%] p-[4px]'
                            />

                        </div>

                        <div className="">

                            Profile Settings

                        </div>

                    </li>

                    <li
                        className='flex items-center space-x-2 w-full py-3 min-w-[300px] hover:bg-gray-200 transition-all duration-300 px-5 rounded-xl active:opacity-[0.6]'
                    >  
                    
                        <div className="">

                            <MdDarkMode 
                                className='h-[30px] w-auto bg-gray-400 rounded-[50%] p-[4px]'
                            />

                        </div>

                        <div className="">

                            Dark Mode
                            
                        </div>
                    
                    </li>

                    <li
                        className='flex items-center space-x-2 w-full py-3 min-w-[300px] hover:bg-gray-200 transition-all duration-300 px-5 rounded-xl active:opacity-[0.6]'
                    >  
                    
                        <div className="">

                            <IoMdHelpCircle 
                                className='h-[30px] w-auto bg-gray-400 rounded-[50%] p-[4px]'
                            />

                        </div>

                        <div className="">

                            Help
                            
                        </div>
                    
                    </li>

                    <li
                        className='flex items-center space-x-2 w-full py-3 min-w-[300px] hover:bg-gray-200 transition-all duration-300 px-5 rounded-xl active:opacity-[0.6]'
                        onClick={logoutFunction}
                    >

                        <div className="">

                            <IoLogOut 
                                className='h-[30px] w-auto bg-gray-400 rounded-[50%] p-[5px]'
                            />

                        </div>

                        <div className="">

                            Logout

                        </div>

                    </li>

                </ul>

            </div>

        </>

    )

}

export default NavBarDropDown