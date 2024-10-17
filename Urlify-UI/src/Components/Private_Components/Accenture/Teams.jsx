import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import TreeComponent from './TreeDesign/TreeComponent';

const Teams = () => {

    const [role, setRole] = useState(null);

    const [userData, setUserData] = useState();

    const admin = "ADMIN";

    const projectManager = "PROJECTMANAGER"; 

    const teamLead = "TEAMLEAD";

    const teamMember = "TEAMMEMBER";

    const [projectData, SetProjectData] = useState(null);

    useEffect(() => {

        const access_token = Cookies.get('access_token');

        const fetchData = async () => {

            try{

                const response = await axios.post('http://localhost:7777/api/v1/common/getUserObject', {
                    accessToken: access_token
                }, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                });

                if ( response.status === 200 ){

                    setRole(response.data.role);

                    setUserData(response.data);

                }

            }catch(error){

                if ( error.response ){

                    if ( error.response.status = 403 ){

                        console.log(error.response.data);

                        // Cookies.remove('access_token');

                        // window.open('http://localtest.me:7778', '_self');

                    }

                }

            }

        }

        fetchData();

        const fetchProjectData = async () => {

            try{

                const response = await axios.get('http://localhost:7777/api/v1/projects/getProjects', {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                })

                if (response.status === 200) {

                    
                    const projects = response.data;
                    
                    SetProjectData(projects);

                }


            }catch(error){

                if ( error.response ){

                    if ( error.response.status = 403 ){

                        console.log(error.response.data);

                    }

                }

            }

        }

        fetchProjectData();

    }, []);

    const formatData = (projects) => {
        return {
            name: 'Accenture',
            children: projects.map(project => ({
                name: project.projectName,
                children: project.projectManagers.map(manager => ({
                    name: manager.projectManagerName,
                    children: manager.teamLeads.length > 0
                        ? manager.teamLeads.map(teamLead => ({
                            name: teamLead.teamLeadName,
                            children: teamLead.teamMembers.map(member => ({
                                name: member.teamMemberName
                            }))
                        }))
                        : [] // Keep empty array if no team leads
                }))
            }))
        };
    };
    

    return (

        <>

            <Helmet>
                <title> Ulrify | Teams</title>
                <meta name="description" content={`Urlify Dashboard where users perform their activities`} />
                <meta name="keywords" content="User Profile, Project Management, John Doe, Employee Details, UrlifyTeams" />
                <meta property="og:type" content="website" />
            </Helmet>

            {role === admin && ( 

            <>

                <div className="pl-[265px] pt-[60px]">

                    {projectData && projectData.length <= 0 && (

                        <div className="bg-white text-center mt-10 py-10 text-md font-serif tracking-wide mx-5 h-[800px] flex items-center justify-center">

                            No Projects Found

                        </div>

                    )}

                    {projectData && projectData.length > 0 && (

                        <>

                            <div className="bg-white mt-10 py-5 font-serif mx-5 block">

                                <div className="h-[700px]">

                                {projectData && projectData.length > 0 && (
                                    <TreeComponent data={formatData(projectData)} />
                                )}


                                </div>

                            </div>

                            

                        </>

                    )}

                </div>

            </>

            )}

            {role === projectManager && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[217px] pt-[60px]">

                    Teams

                </div>

            </>

            )}

            {role === teamLead && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[265px] pt-[60px]">

                    My Teams

                </div>

            </>

            )}

            {role === teamMember && (

            <>

                <NavBar />

                <LeftNavBar />

                <div className="pl-[185px] pt-[60px]">

                    My Teams

                </div>

            </>

            )}

        </> 

    )

}

export default Teams