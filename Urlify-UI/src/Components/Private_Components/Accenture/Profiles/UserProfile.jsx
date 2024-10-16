import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import LeftNavBar from '../LeftNavBar';
import NavBar from '../NavBar/NavBar'

const UserProfile = () => {

    const { userId } = useParams();

    // Jwt Token
    const access_token = Cookies.get('access_token');

    // Role
    const [role, setRole] = useState(null);

    const [profileData, setProfileData] = useState(false);

    // Roles Data
    const roles = {
        ADMIN: 'ADMIN',
        PROJECT_MANAGER: 'PROJECTMANAGER',
        TEAM_LEAD: 'TEAMLEAD',
        TEAM_MEMBER: 'TEAMMEMBER',
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

    // Function To get and store user data
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

    const fetchProfileData = async () => {

        try{

            const response = await axios.get('http://localhost:7777/api/v1/search/searchUserById/' + userId, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                const profileData = response.data;

                setProfileData(profileData);

            }

        }catch(error){

            handleFetchError(error);

        }

    }

    useEffect(() => {

        if (!access_token) {
        
            // window.open('http://localtest.me:7778', '_self');
        
        } else {
        
            fetchUserData();

            fetchProfileData();
        
        }

    }, [userId]);

    return (

        <>
        
            {role === roles.ADMIN && (

                <>

                    <NavBar />

                    <LeftNavBar />

                    <div className="pl-[265px] pt-[120px] w-full">

                        {profileData && (

                            <div className="block">

                                <div className="">

                                    Profile Id :- {profileData.userId}    

                                </div>

                                <div className="">

                                    Profile Name :- {profileData.userName}   

                                </div>

                                <div className="">

                                    Profile Role :- {profileData.userRole}   

                                </div>

                                <div className="">

                                    Profile Email :- {profileData.userEmail}    

                                </div>

                                <div className="">

                                    Profile Designation :- {profileData.userDesignation}    

                                </div>

                                <div className="">

                                    Project Name :- {profileData.projectName}    

                                </div>
                                
                            </div>

                        )}

                    </div>

                </>

            )}

        </>

    )

}

export default UserProfile