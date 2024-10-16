import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { APPS } from '../../Utils/constants';
import axios from 'axios';
import Cookies from 'js-cookie';


const Login = () => {

    const navigate = useNavigate();

    const [isPageLoading, setIsPageLoading] = useState(false);

    const [orgDomain, setOrgDomain] = useState({
        orgDomainMain: ""
    });

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const updateForm = (e) => {

        const value = e.target.value;

        setCredentials({...credentials, [e.target.name] : value});

    }

    const updateForm1 = (e) => {

        const value = e.target.value;

        setOrgDomain({...credentials, [e.target.name] : value});

    }

    const loginFormFunction = async (e) => {

        e.preventDefault();

        const subDomain = orgDomain.orgDomainMain.toLowerCase();

        const app = APPS.find((app) => {

            return subDomain === app.subdomain
    
        })

        if ( app ) {

            if ( subDomain === 'accenture') {

                try {

                    const response = await axios.post('http://localhost:7777/api/v1/auth/authenticate', credentials)

                    if ( response.status === 200 ) {

                        const access_token = response.data.access_token;

                        Cookies.remove('access_token');

                        // Store the token in a cookie
                        Cookies.set('access_token', access_token, {
                            path: '/',
                            domain: '.localtest.me', 
                            expires: 1,
                            secure: false, // Set to true if using HTTPS
                            sameSite: 'Lax' // Allows sharing across subdomains
                        });

                        // setTimeout(() => {
                            
                        //     const tokenFromCookies = Cookies.get('access_token');

                        //     console.log(tokenFromCookies);  
                        
                        // }, 500);

                        const redirectUrl = `http://${subDomain}.localtest.me:7778`;

                        window.open(redirectUrl, "_self");
            
                        setCredentials({
                            email: "",
                            password: "",
                        });

                    }

                }catch(error) {

                    if ( error.response ) {

                        if ( error.response.status === 403 ) {

                            console.log(error);

                            alert("No User Found");

                        }

                    }

                }
                
            }

        } else {

            alert("Check Your Company Name/Contact Admin");

        }

    }

    useEffect(() => {

        setTimeout(() => {

            setIsPageLoading(true);

        }, 500);

    }, []);

    return (

        <>

            {isPageLoading && (

                <>
            
                    <Helmet>
                        <title>LinkPulse | Login </title>
                        <meta name="description" content="LinkPulse Website Login Page." />
                        <meta name="keywords" content="LinkPulse, Register, Login, Terms, Conditions" />
                    </Helmet>

                
                    <div className="flex justify-end max-sm:justify-center absolute top-0 bottom-0 left-0 right-0">

                        <div className="max-sm:hidden flex-1">

                            <img 
                                src='/Login_LinkPulse.webp'
                                className='object-cover h-full w-full'
                            />

                        </div>

                        <div className="bg-white flex flex-col max-sm:min-w-[350px] max-w-[450px]">

                            <div className="mx-20 max-sm:mx-10 max-sm:mt-[30px] mt-[130px] text-xl font-semibold">

                                Login To LinkPulse

                            </div> 

                            <form
                                onSubmit={(e) => loginFormFunction(e)}
                            >

                                <div
                                    className="w-full flex mt-5"
                                >

                                    <input 
                                        required
                                        className='border-2 border-gray-300 ml-20 w-full leading-[30px] text-[14px] mt-1 hover:border-[#66B2FF] focus:outline-none focus:ring-0 transition-all px-3 max-sm:ml-10'
                                        placeholder='Org Domain'
                                        name='orgDomainMain'
                                        value={orgDomain.orgDomainMain}
                                        onChange={(e) => updateForm1(e)}
                                    />

                                    <input
                                        disabled
                                        value={".linkpulse.in"}
                                        className='border-2 border-gray-300 bg-gray-100 mr-20 w-full leading-[30px] text-[14px] mt-1 hover:border-[#66B2FF] focus:outline-none focus:ring-0 transition-all px-3 max-sm:mr-10 text-black'
                                    />
                                
                                </div>

                                <div className="mt-5 mx-20 max-sm:mx-10 text-sm">

                                    Email

                                </div>

                                <div className="w-full flex">

                                    <input 
                                        type='email'
                                        placeholder='Email'
                                        className='border-2 border-gray-300 w-full mx-20 max-sm:mx-10 leading-[40px] text-[15px] mt-1 hover:border-[#66B2FF] focus:outline-none focus:ring-0 transition-all px-3'
                                        value={credentials.email}
                                        name='email'
                                        onChange={(e) => updateForm(e)}
                                    />

                                </div>

                                <div className="mt-5 mx-20 max-sm:mx-10 text-sm">

                                    Password

                                </div>

                                <div className="w-full flex">

                                    <input 
                                        type='password'
                                        placeholder='Password'
                                        className='border-2 border-gray-300 w-full mx-20 max-sm:mx-10 leading-[40px] text-[15px] mt-1 hover:border-[#66B2FF] focus:outline-none focus:ring-0 transition-all px-3'
                                        value={credentials.password}
                                        name='password'
                                        onChange={(e) => updateForm(e)}
                                    />

                                </div>

                                <div className="flex">

                                    <button
                                        className='bg-[#66B2FF] text-white w-full py-3 mx-20 max-sm:mx-10 mt-5 active:opacity-60'
                                        type='submit'
                                    >

                                        Continue

                                    </button>

                                </div>

                            </form>

                            <div className="flex flex-col mt-5 justify-center text-center text-xs text-gray-400">

                                Not Registered Yet? <br />

                                <button
                                    onClick={() => navigate('/register')}
                                >
                                    
                                    Register

                                </button>

                            </div>

                            <div className="flex mt-auto mb-5 mx-20 text-[13px] text-gray-500 max-sm:text-[8px] justify-center">

                                By Continuing, you agree to our <span className='underline ml-1'> Terms and Policies </span>

                            </div>

                        </div>

                    </div>
                
                </>

            )}

        </>

    )

}

export default Login