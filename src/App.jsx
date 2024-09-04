import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Standart/Layout/Layout'
import MainPage from './Components/Pages/MainPage/MainPage'
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
