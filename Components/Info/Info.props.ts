import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export const theme = 'Тема'
export const publish = 'Опубликовано'
export const duration = 'Длительность чтения'

export interface InfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
	type?: typeof theme | typeof publish | typeof duration | ''
	color?: 'grey' | 'dark-grey'
}