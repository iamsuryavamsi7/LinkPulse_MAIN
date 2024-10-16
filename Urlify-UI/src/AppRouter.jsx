import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Public_Components/Register'
import Login from './Components/Public_Components/Login'
import AccentureMainPage from './Components/Private_Components/Accenture/AccentureMainPage'
import WiproMainPage from './Components/Private_Components/Wipro/WiproMainPage'
import TimeSheets from './Components/Private_Components/Accenture/TimeSheets'
import EmployeeApproval from './Components/Private_Components/Accenture/EmployeeApproval'
import Insights from './Components/Private_Components/Accenture/Insights'
import AttendenceManagement from './Components/Private_Components/Accenture/AttendenceManagement'
import LeaveRequest from './Components/Private_Components/Accenture/LeaveRequest'
import Reports from './Components/Private_Components/Accenture/Reports'
import HTML404 from './Components/Private_Components/Accenture/HTML404'
import ManageProjects from './Components/Private_Components/Accenture/ManageProjects'
import Teams from './Components/Private_Components/Accenture/Teams'
import UserProfile from './Components/Private_Components/Accenture/Profiles/UserProfile'

export function AppRouter() {

	return (

			<Routes>

				<Route index element={<Login/>} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />

			</Routes>

	)

}

export const AccentureRouter = () => {

	return (

		<>

		
			<Routes>

				<Route index element={<AccentureMainPage />} />
				<Route path='/' element={<AccentureMainPage />} />
				<Route path='/time-sheets' element={<TimeSheets />} />
				<Route path='/employee-approval' element={<EmployeeApproval />} />
				<Route path='/insights' element={<Insights />} />
				<Route path='/attendence-management' element={<AttendenceManagement />} />
				<Route path='/leave-request' element={<LeaveRequest />} />
				<Route path='/reports' element={<Reports />} />
				<Route path='/teams' element={<Teams />} />
				<Route path='/manage-projects' element={<ManageProjects />} />
				<Route path='/accenture-profile/:userId' element={<UserProfile />}/>
				<Route path='*' element={<HTML404 />} />

			</Routes>

		</>

	)

}

export const WiproRouter = () => {

	return (

		<>
		
			<Routes>

				<Route path='/' element={<WiproMainPage />} />

			</Routes>

		</>

	)

}

