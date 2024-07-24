import Image from 'next/image'
import styles from './ImageComp.module.css'
import { ImageCompProps } from './ImageComp.props'

import cn from 'classnames'


export const ImageComp = ({ src, width, height, color, className, ...props }: ImageCompProps): JSX.Element => {

	return (
		<figure className={cn(styles.imgWrapper, className, {
			[styles.blue]: color == 'blue',
			[styles.white]: color == 'white'
		})} {...props}>
			<Image height={height} width={width} src={src} alt='postImage' />
		</figure>
	)
}