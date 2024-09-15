import { getPostById } from '@/helpers/getPostById'
import { getPosts } from '@/helpers/getPosts'
import { notFound } from 'next/navigation'
import imageCard from '@/public/Safari.png';
import styles from './PagePost.module.css'
import { getComments } from '@/helpers/getComments';
import {
	DividerDot,
	ImageComp,
	LikeCounter,
	LikeWithText,
	Info,
	Comment,
} from '@/Components';
import { CommentForm } from '@/Components/CommentForm/CommentForm';


export async function generateStaticParams() {
	const posts = await getPosts(18)

	if (!posts) {
		notFound()
	}

	return posts.map(post => ({ id: post.id.toString() }))
}

export default async function PagePost({ params }: { params: { id: number } }) {

	const page = await getPostById(params.id)

	if (!page) {
		notFound()
	}

	const comments = await getComments(params.id)
	console.log(comments)

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
			{comments && <section className={styles.comments}>
				<h3 className={styles.Comments}>Комментарии</h3>
				{comments.map(comment => <Comment comment={comment} />)}
			</section>
			}
			<section className='commentForm'>
				<CommentForm postId={params.id} />
			</section>
		</div>
	)
}