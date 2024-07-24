import cn from 'classnames';
import styles from './DividerDot.module.css';
import { DividerDotProps } from './DividerDot.props';

export const DividerDot = ({ className, ...props }: DividerDotProps): JSX.Element => {

	return (
		<div className={cn(styles.dividerDot, className)} {...props}>
			&#xb7;
		</div>
	);
};