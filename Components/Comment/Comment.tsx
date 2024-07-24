import cn from 'classnames';
import styles from './Comment.module.css';
import { CommentProps } from './Comment.props';
import { DividerDot } from '@/Components';
import { Info } from '../Info/Info';

export const Comment = ({ comment, className, ...props }: CommentProps): JSX.Element => {

	const { name, email, body } = comment

	return (
		<div className={cn(styles.Comment, className)} {...props}>
			<Info className={styles.name}>{name}</Info>
			<DividerDot />
			<Info className={styles.email}>{email}</Info>
			<p className={styles.text}>{body}</p>
		</div>
	);
};