/* eslint-disable import/no-anonymous-default-export */
import {
	SET_QUESTIONS,
	// SET_TRUE_ANSWER,
	// SET_FALSE_ANSWER,
	SET_CORRECT,
	CLEAR_ANSWERS,
} from './actionTypes'

export const initialState = {
	isGame: false,
	questions: '',
	answers: {},
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_QUESTIONS: {
			const { questions } = action.payload
			return {
				...state,
				questions,
			}
		}
		// case SET_FALSE_ANSWER: {
		// 	const { id } = action.payload
		// 	const answers = { ...state.answers, [id]: false }
		// 	return {
		// 		...state,
		// 		answers,
		// 	}
		// }
		// case SET_TRUE_ANSWER: {
		// 	const { id } = action.payload
		// 	const answers = { ...state.answers, [id]: true }
		// 	return {
		// 		...state,
		// 		answers,
		// 	}
		// }
		case CLEAR_ANSWERS: {
			return {
				...state,
				answers: {},
			}
		}
		case SET_CORRECT: {
			const { id } = action.payload
			const newAnswers = { ...state.answers, [id]: true }
			// console.log(newAnswers)

			// newAnswers[id] = true
			return {
				...state,
				answers: newAnswers,
			}
		}
		default: {
			return state
		}
	}
}
