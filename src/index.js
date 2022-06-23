import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './components/StartPage/StartPage'
import Game from './components/Game/Game'
import Result from './components/Result/Result'
import { Provider } from 'react-redux'
import store from './store'
// import your route components too

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='game' element={<Game />} />
				<Route path='result' element={<Result />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
