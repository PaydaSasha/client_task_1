import {
	SET_QUESTIONS,
	// SET_TRUE_ANSWER,
	// SET_FALSE_ANSWER,
	SET_CORRECT,
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
export const setCorrect = (id) => ({
	type: SET_CORRECT,
	payload: {
		id,
	},
})
export const clearAnswers = () => ({
	type: CLEAR_ANSWERS,
})
