import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/Game.module.css'
import { setQuestions, setAnswer } from './actions'
import filterStringFromQuotes from '../../services/filterJSONfromQuotes'

export default function Game() {
	const [questionNum, setQuestionNum] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const [fetchError, setFetchError] = useState(null)

	let navigate = useNavigate()
	const dispatch = useDispatch()

	const { isGame } = useSelector((state) => state.startPage)
	const { questions } = useSelector((state) => state.game)

	useEffect(() => {
		if (!isGame) navigate('/', { replace: true })
	}, [isGame, navigate, dispatch])

	useEffect(() => {
		const load = async function () {
			try {
				const response = await fetch(
					'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
				)
				const { results } = await response.json()
				dispatch(setQuestions(results))
				setIsLoading(false)
			} catch (err) {
				setIsLoading(false)
				console.log(err)
				setFetchError('You faced with a fetching problem, try to reload page')
			}
		}
		load()
	}, [dispatch])

	useEffect(() => {
		return () => {
			setFetchError(null)
		}
	}, [])

	const chooseTrueAnswer = () => {
		setQuestionNum((prev) => prev + 1)
		dispatch(setAnswer(questionNum, true))
	}

	const chooseFalseAnswer = () => {
		setQuestionNum((prev) => prev + 1)
		dispatch(setAnswer(questionNum, false))
	}

	return (
		<>
			{isLoading ? (
				<p className={styles.fetchingMsg}>Loading...</p>
			) : fetchError ? (
				<p className={styles.fetchingMsg}>{fetchError}</p>
			) : questionNum !== questions.length ? (
				<div className={styles.container}>
					<h1 className={styles.title}>{questions[questionNum].category}</h1>
					<div className={styles.card}>
						{filterStringFromQuotes(questions[questionNum].question)}
					</div>
					<div className={styles.buttonContainer}>
						<button className={styles.answerButton} onClick={chooseTrueAnswer}>
							TRUE
						</button>
						<button className={styles.answerButton} onClick={chooseFalseAnswer}>
							FALSE
						</button>
					</div>
					<p className={styles.numShower}>
						{questionNum + 1 + ' of ' + questions.length}
					</p>
				</div>
			) : (
				<Navigate to='../result' />
			)}
		</>
	)
}
