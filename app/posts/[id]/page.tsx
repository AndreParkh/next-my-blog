import { getPostById } from '@/helpers/post'
import { getPosts } from '@/helpers/posts'
import { notFound } from 'next/navigation'
import imageCard from '@/public/Safari.png';
import styles from './PagePost.module.css'
import { DividerDot, ImageComp, LikeCounter, LikeWithText } from '@/Components';
import { Info } from '@/Components/Info/Info';


export async function generateStaticParams() {
	const posts = await getPosts(18)

	if (!posts) {
		notFound()
	}

	return posts.map(post => ({ id: post.id.toString() }))
}


export default async function PagePost({ params }: { params: { id: string } }) {


	const page = await getPostById(params.id)

	if (!page) {
		notFound()
	}

	return (
		<div >

			<h2 className={styles.title}>{page.title}</h2>
			<div className={styles.info}>
				<Info color='dark-grey'>Front-end</Info>
				<DividerDot />
				<Info>1 месяц назад</Info>
				<DividerDot />
				<Info>3 минуты</Info>
				<DividerDot />
				<LikeCounter qtyLike={5} />
			</div>
			<ImageComp
				src={imageCard}
				width={687}
				height={440}
				color={'white'} />
			<div className={styles.content}>
				{page.body ?? <div dangerouslySetInnerHTML={{ __html: page.body }} />}
				<LikeWithText className={styles.LikeButton} text='Понравилось? Жми' />
			</div>
		</div>
	)
}