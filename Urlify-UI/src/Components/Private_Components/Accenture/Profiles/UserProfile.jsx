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

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const [imageSrc, setImageSrc] = useState(null); //

    const [editMode, setEditMode] = useState(false);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const [profileData, setProfileData] = useState(false);

    const handleUpload = async () => {
        if (!selectedFile) {
          alert("Please select a file.");
          return;
        }
    
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("userId", profileData.userId)
    
        try {
          const response = await axios.post('http://localhost:7777/api/v1/files/uploadProfilePic', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${access_token}`
            },
          });
          setUploadStatus(response.data); // show the message returned from backend
          setSelectedFile(null);
          setEditMode(false);
        } catch (error) {
          setUploadStatus("File upload failed. Please try again.");
        }
      };

    
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

    const fetchImage = async (data) => {

        setImageSrc(null);

        try {
            const response = await axios.get(`http://localhost:7777/api/v1/files/display/${data.profilePicUrl}`, {
                responseType: 'blob', // Ensure the response is treated as a binary Blob
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });

            if ( response.status === 200 ){

                const imageBlob = URL.createObjectURL(response.data);
                
                setImageSrc(imageBlob); // Set Blob URL as the img src

            }
        } catch (error) {
            
            handleFetchError(error);

            setImageSrc(null);

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

                fetchImage(profileData);

                if ( !profileData.profilePicUrl ){

                    setImageSrc(null);

                }

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

                    {editMode && (

                        <div className="fixed flex z-50 justify-center items-center top-0 left-0 bottom-0 right-0">

                            <div
                                className='bg-gray-400 py-10 px-10 space-y-5 rounded-lg'
                            >
                                
                                <h3>Upload a file</h3>
                                
                                <input type="file" onChange={handleFileChange} />
                                
                                <div className="">

                                    <button 
                                        className='bg-red-500 rounded-lg p-1 text-white font-semibold'
                                        onClick={handleUpload}
                                    >
                                        Upload
                                    
                                    </button>
                                    
                                    <button
                                        className='bg-red-500 rounded-lg p-1 text-white font-semibold'
                                        onClick={() => {

                                            setEditMode(false);

                                        }}
                                    >

                                        Cancel

                                    </button>

                                </div>

                                {uploadStatus && <p>{uploadStatus}</p>}
                            
                            </div>
 
                        </div>

                    )}

                    <div className="pl-[265px] pt-[120px] w-full ">

                        <div className="inline-block mx-10">

                            {imageSrc ? (
                                <img src={imageSrc} className='h-[100px] w-[100px] rounded-[50%] object-cover' alt="Protected Resource" />
                            ) : (
                                <img src='/emptyuser.jpeg' className='h-[100px] w-[100px] rounded-[50%] object-cover'/>
                            )}

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

                                    <button
                                        className='bg-green-500 px-1 rounded-lg py-1 text-white font-semibold'
                                        onClick={() => {

                                            setEditMode(true);

                                        }}
                                    >

                                        Update Profile

                                    </button>
                                    
                                </div>

                            )}

                        </div>

                    </div>

                </>

            )}

        </>

    )

}

export default UserProfile