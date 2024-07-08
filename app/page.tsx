'use client'
import { Card } from '@/Components/Card/Card'
import styles from "./page.module.css"
import { CardProps } from '@/Components/Card/Card.props'
import { Like } from '@/Components/Like/Like'
import { useEffect, useState } from 'react'


export default function Home() {
	const tempData: CardProps = {
		title: 'Как работать с CSS Grid',
		text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
	}

	const [isLiked, setIsLiked] = useState(false)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/:id', { method: "PATCH" })
	}, [isLiked])

	return (
		<main className={styles.main}>
			<Card title={tempData.title} text={tempData.text} />
			<Like setState={(state: boolean) => setIsLiked(state)} />
		</main>
	)
}