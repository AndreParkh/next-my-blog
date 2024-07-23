import { IPost } from './interfaces'

export async function getPost(id: string): Promise<IPost | null> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`)
	console.log(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`)
	if (!res.ok) {
		return null
	}
	return res.json()
}
