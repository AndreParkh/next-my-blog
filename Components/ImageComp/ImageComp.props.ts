import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImageCompProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	src: StaticImageData | string,
	height: number,
	width: number,
	color: 'blue' | 'white'
}