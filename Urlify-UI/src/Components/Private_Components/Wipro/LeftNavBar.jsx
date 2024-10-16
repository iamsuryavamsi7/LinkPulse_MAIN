import React, { useEffect, useState } from 'react'
import { BsFillFileBarGraphFill, BsPeopleFill } from 'react-icons/bs';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { MdCoPresent, MdNoteAlt, MdThumbsUpDown } from 'react-icons/md';
import { SiGoogletasks } from 'react-icons/si';
import { TbLayoutDashboardFilled, TbReportSearch } from 'react-icons/tb';
import '../../../Style/Private_Style/NavBar.css';

const LeftNavBar = () => {

    const [role, setRole] = useState(null);

    const admin = "ROLE_ADMIN";

    const projectManager = "ROLE_MANAGER"; 

    const teamLead = "ROLE_TEAMLEAD";

    const teamMember = "ROLE_TEAMMEMBER";

    useEffect(() => {

        setRole(projectManager);

    }, []);

    return (

        <>
        
            <div className="top-[80px] left-0 bottom-0 fixed text-center z-50 border-r-[1px] border-gray-400">

                {role === admin && (

                    <>
                  
                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdNoteAlt
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdThumbsUpDown
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Employee Approval

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Insights

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdCoPresent
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Attendence Management

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <FaUmbrellaBeach
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbReportSearch
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Reports

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <IoSettings
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Settings
                                
                            </div>

                        </div>

                    </>  

                )}

                {role === projectManager && (

                    <>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdNoteAlt
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdThumbsUpDown
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Employee Approval

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <BsPeopleFill
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">
                                
                                Team Management

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Team Insights

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <FaUmbrellaBeach
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbReportSearch
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Reports

                            </div>

                        </div>

                    </>  

                )}

                {role === teamLead && (

                    <>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdNoteAlt
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <SiGoogletasks
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">
                                
                                Task Management

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <FaUmbrellaBeach
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbReportSearch
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Reports

                            </div>

                        </div>

                    </>  

                )}

                {role === teamMember && (

                    <>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                            />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <MdNoteAlt
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <FaUmbrellaBeach
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                My Insights

                            </div>

                            </div>

                        <div className="hover:bg-gray-300 h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <TbReportSearch
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">

                                Reports

                            </div>

                        </div>

                    </>  

                )}

            </div>
        
        </>

    )

}

export default LeftNavBar