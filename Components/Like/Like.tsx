'use client'
import styles from './Like.module.css'
import LikeSvg from '@/public/like.svg'
import cn from 'classnames'
import { LikeProps } from './Like.props'
import { useState } from 'react'

export const Like = ({ setState, ...props }: LikeProps): JSX.Element => {

	const [isLiked, setIsLiked] = useState(false);

	const onClickHandler = (): void => {
		setIsLiked(!isLiked)
		setState(!isLiked)
	}

	return (
		<div
			className={cn(styles.likeWrapper, { [styles.filled]: isLiked })}
			onClick={() => onClickHandler()}
			{...props}
		>
			<LikeSvg />
		</div>
	)
}