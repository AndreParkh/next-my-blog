import cn from 'classnames';
import styles from './Info.module.css';
import { InfoProps } from './Info.props';

export const Info = ({ children, color = 'grey', className, ...props }: InfoProps): JSX.Element => {

	return (
		<div className={cn(styles.Info, className, {
			[styles.grey]: color == 'grey',
			[styles.datkGrey]: color == 'dark-grey'
		})} {...props}>
			{children}
		</div>
	);
};