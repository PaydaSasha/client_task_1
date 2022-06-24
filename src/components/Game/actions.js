import {
	SET_QUESTIONS,
	// SET_TRUE_ANSWER,
	// SET_FALSE_ANSWER,
	SET_ANSWER,
	CLEAR_ANSWERS,
} from './actionTypes'

export const setQuestions = (questions) => ({
	type: SET_QUESTIONS,
	payload: {
		questions,
	},
})

// export const setTrueAnswer = (id) => ({
// 	type: SET_TRUE_ANSWER,
// 	payload: {
// 		id,
// 	},
// })
// export const setFalseAnswer = (id) => ({
// 	type: SET_FALSE_ANSWER,
// 	payload: {
// 		id,
// 	},
// })
export const setAnswer = (id, answ) => ({
	type: SET_ANSWER,
	payload: {
		id,
		answ,
	},
})
export const clearAnswers = () => ({
	type: CLEAR_ANSWERS,
})
