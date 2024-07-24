import { API } from './API'
import { IPost } from './interfaces'

export async function getPostById(id: number): Promise<IPost | null> {

	const res = await fetch(`${API.posts}/${id}`)

	if (!res.ok) {
		return null
	}

	return res.json()
}
