import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';
import { Helmet } from 'react-helmet-async';

const LeaveRequest = () => {

    const [role, setRole] = useState(null);

    const admin = "ADMIN";

    const projectManager = "PROJECTMANAGER"; 

    const teamLead = "TEAMLEAD";

    const teamMember = "TEAMMEMBER";

    useEffect(() => {

        setRole(admin);

    }, []);


    return (

        <>

            <Helmet>
                <title>Urlify | Leave Request</title>
                <meta name="description" content={`Urlify Dashboard where users perform their activities`} />
                <meta name="keywords" content="User Profile, Project Management, John Doe, Employee Details, Urlify, Leave Request" />
                <meta property="og:type" content="website" />
            </Helmet>

            {role === admin && (

            <>

                <div className="pl-[265px] pt-[60px]">

                    Leave Request

                </div>

            </>

            )}

            {role === projectManager && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[217px] pt-[60px]">

                    Leave Request

                </div>

            </>

            )}

            {role === teamLead && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[265px] pt-[60px]">

                    Leave Request

                </div>

            </>

            )}

            {role === teamMember && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[185px] pt-[60px]">

                    Leave Request

                </div>

            </>

            )}

        </> 

    )

}

export default LeaveRequest