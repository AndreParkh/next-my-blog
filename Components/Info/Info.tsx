import cn from 'classnames';
import styles from './Info.module.css';
import { InfoProps } from './Info.props';

export const Info = ({ children, color = 'grey', type = '', className, ...props }: InfoProps): JSX.Element => {

	return (
		<div
			className={cn(styles.Info, className, {
				[styles.grey]: color == 'grey',
				[styles.datkGrey]: color == 'dark-grey'
			})}
			{...props}>
			<span className='visualyHidden'>{type}</span>
			{children}
		</div>
	);
};