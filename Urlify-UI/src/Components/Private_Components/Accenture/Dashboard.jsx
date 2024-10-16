import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {

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
                <title>Urlify | Dashboard</title>
                <meta name="description" content={`Urlify Dashboard where users perform their activities`} />
                <meta name="keywords" content="User Profile, Project Management, John Doe, Employee Details, Urlify" />
                <meta property="og:type" content="website" />
            </Helmet>

            {role === admin && (

                <>

                    <NavBar />

                    <LeftNavBar />

                    <div className="pl-[265px] pt-[60px]">

                        Dashboard

                    </div>

                </>

            )}  

        </>

    )

}

export default Dashboard