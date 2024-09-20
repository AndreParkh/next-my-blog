import styles from './LikeCounter.module.css';
import LikeSvg from '@/public/like.svg';
import { LikeCounterProps } from './LikeCounter.props';

export const LikeCounter = ({ qtyLike }: LikeCounterProps): JSX.Element => {

	return (
		<div className={styles.likeCounter} >
			<span className='visualyHidden'>Количество лайков</span>
			{qtyLike}
			<LikeSvg />
		</div>
	);
};