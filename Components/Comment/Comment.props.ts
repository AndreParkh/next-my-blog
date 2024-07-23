import { IComment } from '@/helpers/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CommentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	comment: IComment
}