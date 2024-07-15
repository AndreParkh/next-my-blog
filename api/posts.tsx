import { IPost } from './interfaces'


export async function getPosts(): Promise<IPost[]> {
	const posts = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/posts?_limit=18')

	return posts.json()
}
