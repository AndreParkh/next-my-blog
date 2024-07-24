'use client'
import cn from 'classnames';
import styles from './CommentForm.module.css';
import { CommentFormProps } from './CommentForm.props';
import { Input, Textarea } from '@/Components';
import { useForm } from 'react-hook-form';
import { ICommentForm } from './CommentForm.interface';
import { API } from '@/helpers/API';
import { useState } from 'react';

export const CommentForm = ({ postId, className, ...props }: CommentFormProps): JSX.Element => {

	const { register, handleSubmit, formState: { errors }, reset } = useForm<ICommentForm>()
	const [isSuccess, setIsSuccess] = useState(false)
	const [error, setError] = useState('')


	const onSubmit = async (data: ICommentForm, id: number) => {
		try {
			const answer = await fetch(`${API.posts}/${id}`, { method: "PATCH" })
			if (answer.ok) {
				setIsSuccess(true)
				reset()
			} else {
				setError('Что-то пошло не так')
			}
			console.log('Данные: ', data, ', ответ: ', answer)
		} catch (e) {
			setError(e.message)
		}

	}

	if (isSuccess) {
		setTimeout(() => setIsSuccess(false), 3000)
	}

	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data, postId))}>
			<div className={cn(styles.commentForm, className)} {...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Введите имя' } })}
					placeholder={'Имя'}
					error={errors.name}
				/>
				<Textarea
					{...register('comment', { required: { value: true, message: 'Введите комментарий' } })}
					placeholder={'Комментарий'}
					error={errors.comment}
				/>
				<button className={styles.button}>Отправить</button>
				<div className={cn(styles.message, { [styles.successMessage]: isSuccess })}>Комментарий успешно отправлен</div >
			</div>
		</form>
	);
};