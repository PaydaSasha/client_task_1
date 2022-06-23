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
				<p>Welcome to the Trivia Challenge!</p>
				<h1 className={styles.title}>
					You will be presented with 10 true or false questions
				</h1>
				<p>Can you score 100%</p>
				<Link to='/game' onClick={() => dispatch(startGame())}>
					BEGIN
				</Link>
			</div>
		</>
	)
}
