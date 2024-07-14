
import { Card, LikeWithText } from '@/Components'
import styles from "./page.module.css"
// import { CardProps } from '@/Components/Card/Card.props'

interface IPost {
	title: string,
	body: string
}

async function getPosts(): Promise<IPost[]> {
	const posts = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/posts?_limit=18')
	return posts.json()
}


export default async function Home() {
	// const tempData: CardProps = {
	// 	title: 'Как работать с CSS Grid',
	// 	text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
	// }

	const posts = await getPosts()

	return (
		<main className={styles.main}>
			{posts.map(post => <Card className={styles.gridItem} title={post.title} text={post.body} />)}
			<LikeWithText text={''} />
		</main>
	)
}