import { API } from './API'
import { IComment } from './interfaces'

export async function getComments(postId: number): Promise<IComment[] | null> {

	const comments = await fetch(`${API.posts}/${postId}/comments`)

	if (!comments.ok) {
		return null
	}

	return comments.json()
}
