import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';

const Insights = () => {

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

            {role === admin && (

            <>

                <div className="pl-[265px] pt-[60px]">

                    Insights

                </div>

            </>

            )}

            {role === projectManager && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[217px] pt-[60px]">

                    Insights

                </div>

            </>

            )}

            {role === teamLead && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[265px] pt-[60px]">

                    Insights

                </div>

            </>

            )}

            {role === teamMember && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[185px] pt-[60px]">

                    Insights

                </div>

            </>

            )}

        </> 

    )

}

export default Insights