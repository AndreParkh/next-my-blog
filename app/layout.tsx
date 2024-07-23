import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import GithubSvg from '@/public/github.svg'

import "./globals.css";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Blog",
	description: "My Blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={OpenSans.className}>
				<div className="container">
					<header className="header">
						<h1 className="title">Мой Блог</h1>
						<a href="https://github.com/AndreParkh" target="_blank" className="github">
							<GithubSvg />
						</a>
					</header>
					{children}
				</div>
			</body>
		</html>
	);
}