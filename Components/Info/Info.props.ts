import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
	color?: 'grey' | 'dark-grey'
}