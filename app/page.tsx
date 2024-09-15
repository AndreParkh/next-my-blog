
import { Card } from '@/Components'
import styles from "./page.module.css"
import { getPosts } from '@/helpers/getPosts'


export default async function Home() {

	const posts = await getPosts(18)

	return (
		<main className={styles.main}>
			<ul className={styles.ul}>
				{posts && posts.map(post =>
					<li className={styles.gridItem}>
						<Card post={post} />
					</li>
				)}
			</ul>
		</main>
	)
}