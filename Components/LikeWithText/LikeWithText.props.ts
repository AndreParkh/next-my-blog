import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeWithTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string
}