'use client'
import { createContext, useContext } from 'react'
import styles from './GitHubItem.module.css'
import { GitHubItemProps } from './GitHubItem.props'

import GithubSvg from '@/public/github.svg'

interface IGitHubContext {
	link: string
}

export const gitHubContext = createContext<IGitHubContext>({ link: 'https://github.com/AndreParkh' })

export const GitHubItem = ({ ...props }: GitHubItemProps): JSX.Element => {

	const { link } = useContext(gitHubContext)

	return (
		<gitHubContext.Provider value={{ link: '' }}>
			<a href={link} target="_blank" className={styles.github} {...props}>
				<GithubSvg />
			</a>
		</gitHubContext.Provider>
	)
}