import styles from './Card.module.css';
import { CardProps } from './Card.props';
import imageCard from '@/public/Safari.png';
// import Image from 'next/image';
import Arrow from './arrow.svg';
import cn from 'classnames'
import Link from 'next/link';
import { LikeCounter, ImageComp, DividerDot } from '@/Components/index';
import { Info } from '../Info/Info';

export const Card = ({ post, className, ...props }: CardProps): JSX.Element => {

	const { id, title, body } = post

	return (
		<div className={cn(styles.card, className)} {...props}>
			<ImageComp
				src={imageCard}
				height={200}
				width={300}
				color={'blue'} />
			<div className={styles.content}>
				<Info className={styles.theme} color='dark-grey'>Front-end</Info>
				<Info className={styles.lastChanged}>1 месяц назад</Info>
				<DividerDot className={styles.separator} />
				<LikeCounter qtyLike={5} />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{body}</p>
			</div>
			<div className={styles.reference}>
				<Info className={styles.duration}>3 минуты</Info>
				<Link href={`/posts/${id}`} className={styles.moreInfo}>
					Читать
					<Arrow />
				</Link >
			</div>
		</div>
	);
};