
import { Card } from '@/Components'
import styles from "./page.module.css"
import { getPosts } from '@/helpers/getPosts'


export default async function Home() {

	const qtyPost = 18
	const posts = await getPosts(qtyPost)

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