import { IPost } from '@/api/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: IPost
}