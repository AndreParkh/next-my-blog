import styles from './Card.module.css';
import { CardProps } from './Card.props';
import imageCard from '@/public/Safari.png';
import Image from 'next/image';
import Arrow from './arrow.svg';
import { Likes } from '../Likes/Likes';

export const Card = ({ title, text }: CardProps): JSX.Element => {

	return (
		<div className={styles.card}>
			<figure className={styles.imgWrapper}>
				<Image height={200} width={300} src={imageCard} alt='image' />
			</figure>
			<div className={styles.content}>
				<div className={styles.theme}>Front-end</div>
				<div className={styles.lastChanged}>1 месяц назад</div>
				<div className={styles.separator}>&#xb7;</div>
				<Likes qtyLike={5} />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
			</div>
			<div className={styles.reference}>
				<p className={styles.duration}>3 минуты</p>
				<a href="#" className={styles.moreInfo}>
					Читать
					<Arrow />
				</a>
			</div>
		</div>
	);
};