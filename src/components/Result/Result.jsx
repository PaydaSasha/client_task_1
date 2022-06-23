import React, { useEffect } from 'react'
import styles from '../../styles/StartPage.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { endGame } from '../StartPage/actions'

export default function StartPage() {
	const { isGame } = useSelector((state) => state.startPage)
	const { questions } = useSelector((state) => state.game)

	const result = questions.reduce((sum, item) => {
		if (item.correct_answer === item.answer) {
			++sum
		}
		return sum
	}, 0)

	let navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isGame) navigate('/', { replace: true })
		console.log(questions)

		return () => {
			dispatch(endGame())
		}
	}, [isGame, navigate, dispatch, questions])
	return (
		<>
			<div className={styles.container}>
				<p>Welcome to the Trivia Challenge!</p>
				<h1 className={styles.title}>
					You will be presented with 10 true or false questions
				</h1>
				<p>Your score {result * 10 + '%'}</p>
				<Link to='/'>Return to HomePage</Link>
			</div>
		</>
	)
}
