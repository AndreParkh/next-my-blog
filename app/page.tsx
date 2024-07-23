
import { Card } from '@/Components'
import styles from "./page.module.css"
import { getPosts } from '@/helpers/getPosts'


export default async function Home() {

	const posts = await getPosts(18)

	return (
		<main className={styles.main}>
			{posts && posts.map(post => <Card className={styles.gridItem} post={post} />)}
		</main>
	)
}