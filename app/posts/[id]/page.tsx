import { getPost } from '@/api/post'
import { getPosts } from '@/api/posts'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map(post => ({ id: post.id.toString() }))
}


export default async function PagePost({ params }: { params: { id: string } }) {


	const page = await getPost(params.id)

	if (!page) {
		notFound()
	}

	return (
		<div >
			Страница c постом id {page.id}
		</div>
	)
}