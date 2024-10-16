import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import NavBar from './NavBar/NavBar';
import LeftNavBar from './LeftNavBar';
import axios from 'axios';
import { CiEdit } from 'react-icons/ci';
import { MdAddBox, MdDeleteForever } from 'react-icons/md';

const ManageProjects = () => {

    const access_token = Cookies.get('access_token');

    const [role, setRole] = useState(null);

    const [userData, setUserData] = useState();

    const [projectData, setProjectData] = useState();

    const [showAddProject, setShowAddProject] = useState(false);

    const [editButtonVisible, setEditButtonVisible] = useState({});

    const [deleteButtonVisible, setDeleteButtonVisible] = useState({});


    const [projectDetails, setProjectDetails] = useState({
        projectName: "",
        projectDescription: ""
    });

    const [formData, setFormData] = useState({
        id: "",
        projectName: "",
        projectDesc: "",
        projectCreatedOn: "",
    });

    const [editMode, setEditMode] = useState(false);

    const enableEditVisible = (id) => {
        setEditButtonVisible((prev) => ({ ...prev, [id]: true }));
    };

    const disableEditVisible = (id) => {
        setEditButtonVisible((prev) => ({ ...prev, [id]: false }));
    };

    // Functions to enable/disable delete tooltip visibility
    const enableDeleteVisible = (id) => {
        setDeleteButtonVisible((prev) => ({ ...prev, [id]: true }));
    };

    const disableDeleteVisible = (id) => {
        setDeleteButtonVisible((prev) => ({ ...prev, [id]: false }));
    };

    const addProjectButtonProject = () => {

        if ( showAddProject ) {

            setShowAddProject(false);

        } else {

            setShowAddProject(true);

        }

    }

    const admin = "ADMIN";

    const projectManager = "PROJECTMANAGER"; 

    const teamLead = "TEAMLEAD";

    const teamMember = "TEAMMEMBER";

    const fetchProjectsData = async () => {

        try{

            const response = await axios.get('http://localhost:7777/api/v1/projects/getProjectOnly', {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                setProjectData(response.data);

            }

        }catch(error){

            if ( error.response ){

                if ( error.response.status = 403 ){

                    console.log(error.response);

                }

            }

        }

    }

    const addProjectFunction = async (e) => {

        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:7777/api/v1/projects/addProject', projectDetails, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                console.log(response.data);

                fetchProjectsData();

                setProjectDetails({
                    projectName: "",
                    projectDescription: ""
                });

                setShowAddProject(false);

            }

        }catch(error){

            if ( error.response ){

                if ( error.response.status === 403 ){

                    console.log(error.response.data);

                }

            }

        }
        
    }

    const handleOnChangeFunction = (e) => {

        e.preventDefault();

        const value = e.target.value;

        setProjectDetails({...projectDetails, [e.target.name]: value});

    }

    const handleOnChangeFunction2 = (e) => {

        e.preventDefault();

        const value = e.target.value;

        setFormData({...formData, [e.target.name]: value});

    }

    const deleteButtonFunctionManage = async (e, id) => {

        e.preventDefault();

        try{

            const response = await axios.delete('http://localhost:7777/api/v1/projects/deleteProject/' + id, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                console.log(response.data);

                fetchProjectsData();

            }

        }catch(error){

            if ( error.response.status === 403 ){

                console.log(error.response.data);
                
            }

        }

    }

    const editButtonManageProject = async (e, id) => {

        e.preventDefault();

        try{

            const response = await axios.get('http://localhost:7777/api/v1/projects/getProjectById/' + id, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                setEditMode(true);

                setFormData(response.data);

            }

        }catch(error){

            if ( error.response ){

                if ( error.response.status = 200 ){

                    console.log(error.response.data);

                }

            }

        }

    }

    const cancelButtonFunction = (e) => {

        e.preventDefault();

        setEditMode(false);

    }

    const formSubmitFunction = async (e) => {

        e.preventDefault();

        try{

            const response = await axios.put('http://localhost:7777/api/v1/projects/updateProject/' + formData.id, {
                projectName: formData.projectName,
                projectDescription: formData.projectDesc
            }, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })

            if ( response.status === 200 ){

                console.log("Updated Form Data")

                fetchProjectsData();

                setEditMode(false);

            }

        }catch(error){

            if ( error.response ){

                if ( error.response.status === 403 ){

                    console.log(error.response.data);

                } else {

                    console.log(error.message);

                }

            }

        }

    }

    useEffect(() => {

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

        fetchProjectsData();

    }, []);

    return (

        <>

            {role === admin && (

            <>

                <NavBar />

                <LeftNavBar />

                {editMode && (

                    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center">

                        <div className="bg-gray-300 px-10 rounded-xl py-10  font-serif">

                            <form
                                className='space-y-5'
                                onSubmit={(e) => formSubmitFunction(e)}
                            >

                                <div className="text-xl">

                                    Edit Project

                                </div>

                                <div className="">

                                    <label> Project name </label><br />

                                    <input 
                                        type='text'
                                        className='focus:outline-none border-2 border-sky-300 rounded-lg px-3 leading-8 mt-2'
                                        name='projectName'
                                        value={formData.projectName}
                                        onChange={(e) => handleOnChangeFunction2(e)}
                                    />

                                </div>


                                <div className="">

                                    <label> Project Desc </label><br />

                                    <input 
                                        type='text'
                                        className='focus:outline-none border-2 border-sky-300 rounded-lg px-3 leading-8 mt-2'
                                        name='projectDesc'
                                        value={formData.projectDesc}
                                        onChange={(e) => handleOnChangeFunction2(e)}
                                    />

                                </div>

                                <div className="flex">

                                    <button
                                        className='bg-green-400 mx-3 px-2 py-1 rounded-md text-sm font-semibold hover:opacity-60 active:opacity-80'
                                        type='submit'
                                    >Save</button>

                                    <button
                                        className='bg-red-400 mx-3 px-2 py-1 rounded-md text-sm font-semibold hover:opacity-60 active:opacity-80'
                                        onClick={(e) => cancelButtonFunction(e)}
                                    >Cancel</button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

                <div className="pl-[300px] pt-[100px] mr-5">

                    <div className="text-2xl font-serif">

                        Manage Projects

                    </div>

                <div className="flex items-center">

                    <div className="bg-white px-5 mt-5 py-5 mr-10 flex w-full mb-20">

                        <div className="space-y-3 block w-full">

                            <div className="text-xl font-serif">

                            Current Projects

                            </div>

                            <table
                                className='w-full bg-gray-800 text-white rounded-t-lg'
                            >

                                <thead
                                    className='text-left leading-[50px]'
                                >

                                    <tr>

                                        <th
                                            className='px-5'
                                        >Project Name</th>
                                        <th>Project Description</th>
                                        <th
                                            className='px-5'
                                        >Created On</th>
                                        <th
                                            className='px-8'
                                        >Actions</th>

                                    </tr>

                                </thead>

                                {!projectData && (

                                    <tbody>

                                        <tr>

                                            <td>

                                                <span className="">

                                                    No Data Found

                                                </span>

                                            </td>

                                        </tr>

                                    </tbody>

                                )}

                                <tbody>


                                    {projectData && (
                                        
                                        projectData.map((project) => (
                                        
                                            <tr
                                                key={project.id}
                                                className='bg-white text-black shadow-lg leading-[50px]'
                                            >
                                        
                                                <td className='px-5'>{project.projectName}</td>
                                        
                                                <td>{project.projectDesc}</td>
                                        
                                                <td className='px-5'>{new Date(project.projectCreatedOn).toDateString()}</td>
                                        
                                                <td className='px-5 space-x-5 flex items-center'>
                                        
                                                    <span className="mt-2 relative">
                                                        <CiEdit
                                                            className='text-[35px] bg-gray-200 rounded-[50%] p-1 cursor-pointer hover:opacity-60 active:opacity-80'
                                                            onMouseEnter={() => enableEditVisible(project.id)}
                                                            onMouseLeave={() => disableEditVisible(project.id)}
                                                            onClick={(e) => editButtonManageProject(e, project.id)}
                                                        />
                                                        
                                                        {editButtonVisible[project.id] && (
                                                            <span className="absolute left-[-30px] top-1 text-xs rounded-md px-1 py-1">
                                                                Edit
                                                            </span>
                                                        )}
                                        
                                                    </span>

                                                    <span className="mt-2 relative">
                                                        <MdDeleteForever 
                                                            className='text-[35px] bg-gray-200 rounded-[50%] p-1 cursor-pointer hover:opacity-60 active:opacity-80'
                                                            onMouseEnter={() => enableDeleteVisible(project.id)}
                                                            onMouseLeave={() => disableDeleteVisible(project.id)}
                                                            onClick={(e) => deleteButtonFunctionManage(e, project.id)}
                                                        />

                                                        {deleteButtonVisible[project.id] && (
                                                            <span className="absolute right-[-50px] top-1 text-xs rounded-md px-1 py-1">
                                                                Delete
                                                            </span>
                                                        )}
                                                    </span>
                                        
                                                </td>
                                        
                                            </tr>
                                        
                                        ))
                                    )}

                                </tbody>


                            </table>

                            <div className="flex items-center space-x-1 hover:opacity-70 transition-all duration-300 active:opacity-40 cursor-pointer"
                                onClick={addProjectButtonProject}
                            >

                                <div className="text-xl font-serif"
                                >

                                    <MdAddBox
                                        className='text-2xl'
                                    />

                                </div>

                                <div className="text-sm font-serif">

                                    Add Project

                                </div>

                            </div>

                            {showAddProject && (

                                <div className="flex items-center space-x-5">

                                    <div className="flex items-center space-x-5 transition-all">

                                        <label  className='text-sm font-semibold'>Project Name</label> <br />

                                        <input 
                                            type='text'
                                            className='focus:outline-none bg-gray-100 border-sky-500 border-2 rounded-md px-5 leading-[20px]'
                                            placeholder='Enter Project Name'
                                            name='projectName'
                                            value={projectDetails.projectName}
                                            onChange={(e) => handleOnChangeFunction(e)}
                                        />

                                    </div>

                                    <div className="flex items-center space-x-5 transition-all">

                                        <label className='text-sm font-semibold'>Project Description</label> <br />

                                        <input 
                                        type='text'
                                        className='focus:outline-none  bg-gray-100 border-sky-500 border-2 rounded-md px-5 leading-[0px]'
                                        placeholder='Enter Project Description'
                                        name='projectDescription'
                                        value={projectDetails.projectDescription}
                                        onChange={(e) => handleOnChangeFunction(e)}
                                        />

                                    </div>

                                    <div className="">

                                        <button
                                            className='bg-green-400 px-3 leading-[32px] rounded-lg text-sm font-semibold'
                                            onClick={addProjectFunction}
                                        >

                                            Add Project

                                        </button>

                                    </div>

                                </div>

                            )}

                        </div>

                        </div>

                    </div>

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

export default ManageProjects