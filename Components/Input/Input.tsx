import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({ error, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

	return (
		<div className={styles.inputWrapper}>
			<input className={cn(styles.input, className, {
				[styles.error]: error
			})} ref={ref} {...props} />
			<div className={styles.errorMessage}>{error && error.message}</div>
		</div>
	);
});