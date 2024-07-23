
import { Card, LikeWithText } from '@/Components'
import styles from "./page.module.css"
import { getPosts } from '@/api/posts'


export default async function Home() {

	const posts = await getPosts()

	return (
		<main className={styles.main}>
			{posts && posts.map(post => <Card className={styles.gridItem} post={post} />)}
			<LikeWithText text={''} />
		</main>
	)
}