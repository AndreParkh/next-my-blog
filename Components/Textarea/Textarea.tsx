import cn from 'classnames';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

	return (
		<div className={styles.textareaWrapper}>
			<textarea className={cn(styles.textarea, className, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <div className={styles.errorMessage} role='alert'>{error && error.message}</div>}
		</div>
	);
});