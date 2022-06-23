import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/Game.module.css'
import { setQuestions, setCorrect, clearAnswers } from './actions'

export default function Game() {
	const [questionNum, setQuestionNum] = useState(0)
	const [correctQnt, setCorrectQnt] = useState(0)

	const [isLoading, setIsLoading] = useState(true)
	// const [localAnswers, setLocalAnswers] = useState('')

	let navigate = useNavigate()
	const dispatch = useDispatch()

	const { isGame } = useSelector((state) => state.startPage)
	const { questions, answers } = useSelector((state) => state.game)

	useEffect(() => {
		if (!isGame) navigate('/', { replace: true })
	}, [isGame, navigate, dispatch])

	useEffect(() => {
		const load = async function () {
			const response = await fetch(
				'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
			)
			const { results } = await response.json()
			dispatch(setQuestions(results))
			setIsLoading(false)
		}
		load()
		// console.log(questions)
	}, [dispatch])

	useEffect(() => {
		dispatch(setCorrect(questionNum))
		console.log(answers)
		// console.log(answers)
	}, [dispatch, correctQnt])

	useEffect(() => {
		setQuestionNum(questionNum)
		// console.log(answers)
	}, [correctQnt])

	useEffect(() => {
		return () => {
			dispatch(clearAnswers())
		}
	}, [])

	const checkAnswer = (answ) => {
		if (
			answ.toString() === questions[questionNum].correct_answer.toLowerCase()
		) {
			setCorrectQnt((prev) => prev + 1)
		}
	}

	const chooseTrueAnswer = () => {
		setQuestionNum((prev) => prev + 1)
		checkAnswer(true)
		// setLocalAnswers((prev) => {
		// 	return {
		// 		...prev,
		// 		[questionNum]: true,
		// 	}
		// })
		// console.log(localAnswers)

		// dispatch(setTrueAnswer(questionNum))
	}

	const chooseFalseAnswer = () => {
		setQuestionNum((prev) => prev + 1)
		checkAnswer(false)

		// setLocalAnswers((prev) => {
		// 	return {
		// 		...prev,
		// 		[questionNum]: false,
		// 	}
		// })
		// dispatch(setFalseAnswer(questionNum))
		// console.log(localAnswers)
	}

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : questionNum !== questions.length ? (
				<div className={styles.container}>
					<h1 className={styles.title}>{questions[questionNum].category}</h1>
					<div className={styles.card}>{questions[questionNum].question}</div>
					<div>{questions[questionNum].correct_answer}</div>

					<div>
						<button onClick={chooseTrueAnswer}>TRUE</button>
						<button onClick={chooseFalseAnswer}>FALSE</button>
					</div>
					<p>{questionNum + 1 + ' of ' + questions.length}</p>
				</div>
			) : (
				<Navigate to='../result' />
			)}
		</>
	)
}
