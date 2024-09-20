import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	setState: (state: boolean) => void
}