import styles from './Likes.module.css';
import Like from '@/public/like.svg';
import { LikesProps } from './Likes.props';

export const Likes = ({ qtyLike }: LikesProps): JSX.Element => {

	return (
		<div className={styles.likes}>
			{qtyLike}
			<Like />
		</div>
	)
}