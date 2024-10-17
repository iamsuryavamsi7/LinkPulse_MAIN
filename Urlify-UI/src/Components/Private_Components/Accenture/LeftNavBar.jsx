import React, { useEffect, useState } from 'react'
import { BsFillFileBarGraphFill, BsPeopleFill } from 'react-icons/bs';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { MdCoPresent, MdNoteAlt, MdThumbsUpDown } from 'react-icons/md';
import { SiGoogletasks } from 'react-icons/si';
import { TbLayoutDashboardFilled, TbReportSearch } from 'react-icons/tb';
import '../../../Style/Private_Style/LeftNavBar.css'
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import axios from 'axios';
import { FaTeamspeak } from 'react-icons/fa6';

const LeftNavBar = () => {

    const urlDirectory = document.location.pathname;

    const navigate = useNavigate();

    const [role, setRole] = useState(null);

    const [userData, setUserData] = useState();

    const admin = "ADMIN";

    const projectManager = "PROJECTMANAGER";

    const teamLead = "TEAMLEAD";

    const teamMember = "TEAMMEMBER";

    const [dashBoardColor, setDashBoardColor] = useState('text-black');

    const [dashBoardColor2, setDashBoardColor2] = useState(null);

    const [timeSheetsColor, setTimeSheetsColor] = useState('text-black');

    const [timeSheetsColor2, setTimeSheetsColor2] = useState(null);

    const [employeeApprovalColor, setEmployeeApprovalColor] = useState('text-black');

    const [employeeApprovalColor2, setEmployeeApprovalColor2] = useState(null);

    const [insightslColor, setInsightsColor] = useState('text-black');

    const [insightsColor2, setInsightsColor2] = useState(null);

    const [attendenceManagementColor, setAttendenceManagementColor] = useState('text-black');

    const [attendenceManagementColor2, setAttendenceManagementColor2] = useState(null);

    const [leaveRequestColor, setLeaveRequestColor] = useState('text-black');

    const [leaveRequestColor2, setLeaveRequestColor2] = useState(null);

    const [reportsColor, setReportsColor] = useState('text-black');

    const [reportsColor2, setReportsColor2] = useState(null)
    
    const [settingsColor, setSettingsColor] = useState('text-black');

    const [settingsColor2, setSettingsColor2] = useState(null);

    const [settingsDragDown, setSettingsDragDown] = useState(false);

    const [myTeamColor, setMyTeamColor] = useState('text-black');

    const [myTeamColor2, setMyTeamColor2] = useState(null);

    const settingsButtonFunction = () => {

        if ( settingsDragDown ) {

            setSettingsDragDown(false);

        } else {

            setSettingsDragDown(true);

        }

    }

    useEffect(() => {

        const access_token = Cookies.get('access_token');

        const fetchData = async () => {

            try{

                const response = await axios.post('http://localhost:7777/api/v1/common/getUserObject', {
                    accessToken: access_token
                },{
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                })

                if ( response.status === 200 ){

                    const data = await response.data;

                    setUserData(data);

                    setRole(data.role);

                }

            }catch(error) {

                if ( error.response ){

                    if ( error.response.status === 403 ){

                        console.log(error);

                    }

                }

            }

        }

        fetchData();

        if ( urlDirectory === '/' ) {

            setDashBoardColor('text-[#66B2FF]');

            setDashBoardColor2('bg-gray-300')

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null)

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor2(null)

            setMyTeamColor2(null)

        }

        if ( urlDirectory === '/time-sheets' ) {

            setDashBoardColor(`text-black`)

            setDashBoardColor2(null)

            setTimeSheetsColor('text-[#66B2FF]');

            setTimeSheetsColor2('bg-gray-300')

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

            setEmployeeApprovalColor2(null)

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor2(null)

            setMyTeamColor2(null)

        }

        if ( urlDirectory === '/employee-approval' ) {

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor('text-[#66B2FF]');

            setEmployeeApprovalColor2('bg-gray-300')

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor2(null)

            setMyTeamColor2(null)

            setDashBoardColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

            setTimeSheetsColor(`text-black`)

        }

        if ( urlDirectory === '/insights' ) {

            setDashBoardColor(`text-black`)

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null);

            setInsightsColor('text-[#66B2FF]');

            setInsightsColor2('bg-gray-300')

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor2(null)

            setMyTeamColor2(null)

        }

        if ( urlDirectory === '/attendence-management' ) {

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null);

            setInsightsColor2(null)

            setAttendenceManagementColor('text-[#66B2FF]');

            setAttendenceManagementColor2('bg-gray-300')

            setLeaveRequestColor2(null)

            setReportsColor2(null)

            setMyTeamColor2(null)

            setDashBoardColor(`text-black`)

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

        }

        if ( urlDirectory === '/leave-request' ) {

            setDashBoardColor(`text-black`)

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setReportsColor(`text-black`)

            setMyTeamColor(`text-black`)

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null);

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor('text-[#66B2FF]');

            setLeaveRequestColor2('bg-gray-300')

            setReportsColor2(null)

            setMyTeamColor2(null)

        }


        if ( urlDirectory === '/reports' ) {

            setDashBoardColor(`text-black`)

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setMyTeamColor(`text-black`)

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null);

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor('text-[#66B2FF]');

            setReportsColor2('bg-gray-300')

            setMyTeamColor2(null)

        }

        if ( urlDirectory === '/teams' ) {

            setDashBoardColor(`text-black`)

            setTimeSheetsColor(`text-black`)

            setEmployeeApprovalColor(`text-black`)

            setInsightsColor(`text-black`)

            setAttendenceManagementColor(`text-black`)

            setLeaveRequestColor(`text-black`)

            setReportsColor('text-black');

            setDashBoardColor2(null)

            setTimeSheetsColor2(null)

            setEmployeeApprovalColor2(null);

            setInsightsColor2(null)

            setAttendenceManagementColor2(null)

            setLeaveRequestColor2(null)

            setReportsColor2(null);

            setMyTeamColor('text-[#66B2FF]');

            setMyTeamColor2('bg-gray-300')

        }

    }, [urlDirectory]);

    return (

        <>
        
            <div className="bg-[#F0F2F5] top-[80px] left-0 bottom-0 fixed text-center z-40 border-r-[1px] border-gray-400 flex flex-col">

                {role === admin && (

                    <>
                  
                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${dashBoardColor2}`}
                            onClick={() => navigate('/')}
                        >

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${dashBoardColor}`}
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${timeSheetsColor2}`}
                            onClick={() => navigate('/time-sheets')}
                        >

                            <div className="">

                                <MdNoteAlt
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${timeSheetsColor}`}
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${employeeApprovalColor2}`}
                            onClick={() => navigate('/employee-approval')}
                        >

                            <div className="">

                                <MdThumbsUpDown
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${employeeApprovalColor}`}
                                />

                            </div>

                            <div className="">

                                Employee Approval

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${insightsColor2}`}
                            onClick={() => navigate('/insights')}
                        >

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${insightslColor}`}
                                />

                            </div>

                            <div className="">

                                Insights

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${attendenceManagementColor2}`}
                            onClick={() => navigate('/attendence-management')}
                        >

                            <div className="">

                                <MdCoPresent
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${attendenceManagementColor}`}
                                />

                            </div>

                            <div className="">

                                Attendence Management

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${leaveRequestColor2}`}
                            onClick={() => navigate('/leave-request')}
                        >

                            <div className="">

                                <FaUmbrellaBeach
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${leaveRequestColor}`}
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${reportsColor2}`}
                            onClick={() => navigate('/reports')}
                        >

                            <div className="">

                                <TbReportSearch
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${reportsColor}`}
                                />

                            </div>

                            <div className="">

                                Reports

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${myTeamColor2}`}
                            onClick={() => navigate('/teams')}
                        >

                            <div className="">

                                <FaTeamspeak
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${myTeamColor}`}
                                />

                            </div>

                            <div className="">

                                Teams

                            </div>

                        </div>
                        

                        <div className="relative mt-auto mb-5">

                            <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${settingsColor2} bottom-4 w-full`}
                                onClick={settingsButtonFunction}
                                >
        
                                    <div className="">
        
                                        <IoSettings
                                            className={`h-[25px] w-auto transition-all duration-300 navBar2 ${settingsColor}`}
                                        />
        
                                    </div>
        
                                    <div className="">
        
                                        Settings
                                        
                                    </div>
        
                                </div>

                                {settingsDragDown && (

                                    <div className="absolute top-[-60px] left-3 cursor-pointer bg-gray-800 duration-300 text-white rounded-lg overflow-hidden settingsDropDown z-50"
                                    onClick={() =>{

                                        navigate('/manage-projects')

                                    }}
                                    >

                                    <ul
                                        className='px-5 py-3'
                                    >

                                        <li
                                            className=''
                                        > Manage Projects</li>

                                    </ul>

                                    </div>

                                    )}

                            </div>

                    </>  

                )}

                {role === projectManager && (

                    <>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${dashBoardColor2}`}
                            onClick={() => navigate('/')}
                        >

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${dashBoardColor}`}
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${timeSheetsColor2}`}
                            onClick={() => navigate('/time-sheets')}
                        >

                            <div className="">

                                <MdNoteAlt
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${timeSheetsColor}`}
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 ${employeeApprovalColor2}`}
                            onClick={() => navigate('/employee-approval')}
                        >

                            <div className="">

                                <MdThumbsUpDown
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 ${employeeApprovalColor}`}
                                />

                            </div>

                            <div className="">

                                Employee Approval

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <BsPeopleFill
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">
                                
                                Team Management

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${insightsColor2}`}>

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${insightslColor}]`}
                                />

                            </div>

                            <div className="">

                                Team Insights

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${leaveRequestColor2}`}
                            onClick={() => navigate('/leave-request')}
                        >

                            <div className="">

                                <FaUmbrellaBeach
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${leaveRequestColor}]`}
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${reportsColor2}`}
                            onClick={() => navigate('/reports')}
                        >

                            <div className="">

                                <TbReportSearch
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${reportsColor}]`}
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

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${dashBoardColor2}`}
                            onClick={() => navigate('/')}
                        >

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${dashBoardColor}]`}
                                />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${timeSheetsColor2}`}
                            onClick={() => navigate('/time-sheets')}
                        >

                            <div className="">

                                <MdNoteAlt
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${timeSheetsColor}]`}
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className="hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1">

                            <div className="">

                                <SiGoogletasks
                                    className='h-[25px] w-auto transition-all duration-300 navBar2'
                                />

                            </div>

                            <div className="">
                                
                                Task Management

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${leaveRequestColor2}`}
                            onClick={() => navigate('/leave-request')}
                        >

                            <div className="">

                                <FaUmbrellaBeach
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${leaveRequestColor}]`}
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${reportsColor2}`}
                            onClick={() => navigate('/reports')}
                        >

                            <div className="">

                                <TbReportSearch
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${reportsColor}]`}
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

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${dashBoardColor2}`}
                            onClick={() => navigate('/')}
                        >

                            <div className="">

                                <TbLayoutDashboardFilled 
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${dashBoardColor}]`}
                            />

                            </div>

                            <div className="">

                                Dashboard

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${timeSheetsColor2}`}
                            onClick={() => navigate('/time-sheets')}
                        >

                            <div className="">

                                <MdNoteAlt
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${timeSheetsColor}]`}
                                />

                            </div>

                            <div className="">

                                Time Sheets

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${leaveRequestColor2}`}
                            onClick={() => navigate('/leave-request')}
                        >

                            <div className="">

                                <FaUmbrellaBeach
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${leaveRequestColor}]`}
                                />

                            </div>

                            <div className="">

                                Leave Request

                            </div>

                        </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${insightsColor2}`}>

                            <div className="">

                                <BsFillFileBarGraphFill
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${insightslColor}]`}
                                />

                            </div>

                            <div className="">

                                My Insights

                            </div>

                            </div>

                        <div className={`hover:bg-gray-300 cursor-pointer h-[50px] flex justify-start items-center transition-all duration-300 px-5 space-x-3 active:opacity-[0.6] rounded-lg navBar1 bg-${reportsColor2}`}
                            onClick={() => navigate('/reports')}
                        >

                            <div className="">

                                <TbReportSearch
                                    className={`h-[25px] w-auto transition-all duration-300 navBar2 text-[${reportsColor}]`}
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