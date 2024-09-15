import { API } from './API'
import { IPost } from './interfaces'

export async function getPosts(count: number = 18): Promise<IPost[] | null> {

	const posts = await fetch(`${API.posts + "?_limit=" + count}`)

	if (!posts.ok) {
		return null
	}

	return posts.json()
}
