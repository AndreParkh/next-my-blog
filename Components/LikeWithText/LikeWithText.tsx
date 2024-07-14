'use client'
import { Like } from '../Like/Like'
import styles from './LikeWithText.module.css'
import { LikeWithTextProps } from './LikeWithText.props'
import { useEffect, useState } from 'react'
import cn from 'classnames'

export const LikeWithText = ({ text, className, ...props }: LikeWithTextProps): JSX.Element => {

	const [isLiked, setIsLiked] = useState(false)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/:id', { method: "PATCH" })
	}, [isLiked])

	return (
		<div className={cn(className, styles.wrapper)}  {...props}>
			<span>{text}</span>
			<Like setState={(state: boolean) => setIsLiked(state)} />
		</div>
	)
}