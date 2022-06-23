/* eslint-disable import/no-anonymous-default-export */
import { START_GAME, END_GAME } from './actionTypes'

export const initialState = {
	isGame: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case START_GAME: {
			return {
				...state,
				isGame: true,
			}
		}
		case END_GAME: {
			return {
				...state,
				isGame: false,
			}
		}
		default: {
			return state
		}
	}
}
