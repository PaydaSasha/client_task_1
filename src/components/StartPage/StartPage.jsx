import React from 'react'
import styles from '../../styles/StartPage.module.css'
import { Link } from 'react-router-dom'
import { startGame } from './actions'
import { useDispatch } from 'react-redux/es/exports'
export default function StartPage() {
	const dispatch = useDispatch()
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.geetingMsg}>Welcome to the Trivia Challenge!</h1>
				<h2 className={styles.title}>
					You will be presented with 10 true or false questions
				</h2>
				<h3 className={styles.canScore}>Can you score 100%</h3>
				<Link
					className={styles.beginButton}
					to='/game'
					onClick={() => dispatch(startGame())}
				>
					BEGIN
				</Link>
			</div>
		</>
	)
}
