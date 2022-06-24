import React, { useEffect } from 'react'
import styles from '../../styles/Result.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { endGame } from '../StartPage/actions'
import { clearAnswers } from '../Game/actions'
import filterStringFromQuotes from '../../services/filterJSONfromQuotes'

export default function StartPage() {
	let navigate = useNavigate()
	const dispatch = useDispatch()
	let result
	const { isGame } = useSelector((state) => state.startPage)

	useEffect(() => {
		if (!isGame) navigate('/', { replace: true })
		return () => {
			dispatch(clearAnswers())
			dispatch(endGame())
		}
	}, [isGame, navigate, dispatch])

	const { questions, answers } = useSelector((state) => state.game)
	const isCorrect = (item, i) => {
		return item.correct_answer.toLowerCase() === answers[i].toString()
	}
	if (questions && answers) {
		// console.log(questions.question)
		result = questions.reduce((sum, item, ind) => {
			if (item.correct_answer.toLowerCase() === answers[ind].toString()) {
				++sum
			}
			return sum
		}, 0)
	}

	return (
		<>
			{isGame ? (
				<div className={styles.container}>
					<h1 className={styles.title}>
						You scored {result}/{questions.length}
					</h1>
					<ul className={styles.questionsList}>
						{questions.map((item, i) => {
							return (
								<li key={i} className={styles.listItem}>
									<span className={styles.sign}>
										{isCorrect(item, i) ? '+' : '-'}
									</span>
									<p className={styles.questionText}>
										{filterStringFromQuotes(questions[i].question)}
									</p>
								</li>
							)
						})}
					</ul>
					<Link className={styles.startPageRef} to='/'>
						Play AGAIN?
					</Link>
				</div>
			) : (
				<Navigate to='/' />
			)}
		</>
	)
}
