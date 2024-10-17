import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { SiTicktick } from 'react-icons/si';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';

const EmployeeApproval = () => {
    
    // Jwt Token
    const access_token = Cookies.get('access_token');

    // For Animations
    const [refreshAnimationState, setRefreshAnimationState] = useState(null);
    
    const [role, setRole] = useState(null);
    const [lockedUsers, setLockedUsers] = useState([]);
    const [projectData, setProjectData] = useState([]);
    
    // State to hold details for user approvals
    const [userDetails, setUserDetails] = useState([]);

    const roles = {
        ADMIN: 'ADMIN',
        PROJECT_MANAGER: 'PROJECTMANAGER',
        TEAM_LEAD: 'TEAMLEAD',
        TEAM_MEMBER: 'TEAMMEMBER',
    };

    const refreshButtonFunction = () => {

        fetchLockedUsers();

        setRefreshAnimationState(`animate-spin`);

        setTimeout(() => {

            setRefreshAnimationState(null);
            
        }, 2000)

    }

    // Fetch user data and roles
    const fetchUserData = async () => {
        
        try {
        
            const response = await axios.post('http://localhost:7777/api/v1/common/getUserObject', {
        
                accessToken: access_token,
        
            }, {
        
                headers: { 'Authorization': `Bearer ${access_token}` }
        
            });
        
            if (response.status === 200) {
        
                const data = response.data;
        
                setRole(data.role);
        
            }
        
        } catch (error) {
        
            handleFetchError(error);
        
        }
    
    };

    // Fetch locked users
    const fetchLockedUsers = async () => {
        
        try {
        
            const response = await axios.get('http://localhost:7777/api/v1/common/retrieve-locked-users', {
        
                headers: { 'Authorization': `Bearer ${access_token}` }
        
            });
        
            if (response.status === 200) {
        
                const users = response.data;
        
                setLockedUsers(users);
        
                // Initialize userDetails with locked users
        
                setUserDetails(
                    users.map(user => ({
                        userId: user.id,
                        projectId: '',
                        roleValue: '',
                        designationName: '',
                    }))
                );

            }
        
        } catch (error) {
        
            handleFetchError(error);
        
        }
    
    };

    // Fetch project data
    const fetchProjectData = async () => {
    
        try {
    
            const response = await axios.get('http://localhost:7777/api/v1/projects/getProjectOnly', {
    
                headers: { 'Authorization': `Bearer ${access_token}` }
    
            });
    
            if (response.status === 200) {
    
                setProjectData(response.data);

            }
    
        } catch (error) {
    
            handleFetchError(error);
    
        }
    
    };

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

    // Handle project selection change
    const handleProjectsChange = (e, userId) => { 
        
        const projectId = e.target.value;

        setUserDetails(prevDetails => {

            return prevDetails.map((detail) => {

                if ( detail.userId === userId ){

                    return { ...detail, projectId : projectId };

                } else {

                    return detail;

                }

            })

        })

    };

    // Handle role selection change
    const handleRoleChange = (e, userId) => {

        const role = e.target.value;

        setUserDetails(prevDetails => {

            return prevDetails.map((detail) => {

                if ( detail.userId === userId ){

                    return {...detail, roleValue : role};

                } else {

                    return detail

                }

            })

        })

    };

    // Handle designation input change
    const handleDesignationChange = (e, userId) => {

        const designationName = e.target.value;

        setUserDetails(prevDetails => {

            return prevDetails.map((detail) => {

                if ( detail.userId === userId ){

                    return {...detail, designationName: designationName};

                } else {

                    return detail;

                }

            })

        });
    
    };

    // Accept user function (to be implemented)
    const acceptButtonFunction = async (userId) => {

        const userDetail = userDetails.find( user => user.userId === userId );

        try{

            const response = await axios.post(`http://localhost:7777/api/v1/common/userId/${userDetail.userId}/projectId/${userDetail.projectId}/activateUser`, {
                roleValue: userDetail.roleValue,
                designationName: userDetail.designationName
            }, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                fetchLockedUsers();

            }

        }catch(error){

            handleFetchError(error);

        }

    };

    useEffect(() => {
        
        if (!access_token) {
        
            // window.open('http://localtest.me:7778', '_self');
        
        } else {
        
            fetchUserData();
        
            fetchProjectData();
        
            fetchLockedUsers();
        
        }

    }, [access_token]);

    return (
        <>
            <Helmet>
                <title>Urlify | Employee Approval</title>
                <meta name="description" content={`Urlify Dashboard where users perform their activities`} />
                <meta name="keywords" content="User Profile, Project Management, John Doe, Employee Details, Urlify, Employee Approval Urlify" />
                <meta property="og:type" content="website" />
            </Helmet>

            {role === roles.ADMIN && (
                <>
                    <div className="pl-[265px] pt-[120px] w-full flex">

                        <div className="flex w-full relative mt-5">

                            <div className="flex items-center absolute top-[-50px] right-10 font-semibold text-white bg-black px-2 py-1 rounded-lg space-x-2 cursor-pointer"
                                onClick={(e) => refreshButtonFunction(e)}
                            >

                                <span>Refresh</span>

                                <RiRefreshFill 
                                    className={`text-2xl ${refreshAnimationState}`} 
                            />

                            </div>

                            <table className='bg-gray-300 mx-10 w-full text-left'>
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Projects</th>
                                        <th>Roles</th>
                                        <th>Designation</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lockedUsers.map((lockedUser) => {
                                        const userDetail = userDetails.find(detail => detail.userId === lockedUser.id) || {};
                                        return (
                                            <tr key={lockedUser.id}>
                                                <td>{`${lockedUser.firstName} ${lockedUser.lastName}`}</td>
                                                <td>{lockedUser.email}</td>
                                                <td>
                                                    
                                                    <select
                                                        onChange={(e) => handleProjectsChange(e, lockedUser.id)}
                                                        value={userDetail.projectId || ''}
                                                    >
                                                        <option value="">Select Project</option>
                                                        
                                                        {projectData.map((project) => (
                                                        
                                                            <option key={project.id} value={project.id}>{project.projectName}</option>
                                                        
                                                        ))}

                                                    </select>

                                                </td>
                                                <td>
                                                    <select
                                                        onChange={(e) => handleRoleChange(e, lockedUser.id)}
                                                        value={userDetail.roleValue || ''}
                                                    >
                                                        <option value="">Select Role</option>
                                                        <option value={roles.PROJECT_MANAGER}>Project Manager</option>
                                                        <option value={roles.TEAM_LEAD}>Team Lead</option>
                                                        <option value={roles.TEAM_MEMBER}>Team Member</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="border-2 border-black"
                                                        name="designationName"
                                                        value={userDetail.designationName || ''}
                                                        onChange={(e) => handleDesignationChange(e, lockedUser.id)}
                                                    />
                                                </td>
                                                <td className="flex items-center space-x-3">
                                                    <SiTicktick
                                                        className="text-xl cursor-pointer hover:opacity-50 active:opacity-80"
                                                        onClick={() => acceptButtonFunction(lockedUser.id)}
                                                    />
                                                    <MdOutlineDeleteForever className="text-2xl cursor-pointer hover:opacity-50 active:opacity-80" />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* Add conditional rendering for other roles if needed */}
            {role === roles.PROJECT_MANAGER && (
                <div className="pl-[217px] pt-[60px]">
                    <NavBar />
                    <LeftNavBar />
                    Employee Approval
                </div>
            )}

            {role === roles.TEAM_LEAD && (
                <div className="pl-[265px] pt-[60px]">
                    Employee Approval
                </div>
            )}

            {role === roles.TEAM_MEMBER && (
                <div className="pl-[185px] pt-[60px]">
                    Employee Approval
                </div>
            )}
        </>
    );
};

export default EmployeeApproval;
