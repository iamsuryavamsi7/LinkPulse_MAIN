import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { getApp } from './Utils/helpers.js'

const App = () => {

	const CurrentApp = getApp();

	return (

		<>

				<HelmetProvider>
			
					<BrowserRouter>

						<CurrentApp/>
					
					</BrowserRouter>

				</HelmetProvider>

		</>

	);

}

createRoot(document.getElementById('root')).render(<App />); 