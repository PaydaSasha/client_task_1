import { combineReducers } from 'redux'
import startPage from '../components/StartPage/reducer'
import game from '../components/Game/reducer'

const rootReducer = combineReducers({
	startPage,
	game,
})

export default rootReducer
