import { Card } from '@/Components/Card/Card';
import styles from "./page.module.css";
import { CardProps } from '@/Components/Card/Card.props';

const tempData: CardProps = {
	title: 'Как работать с CSS Grid',
	text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
};

export default function Home() {
	return (
		<main className={styles.main}>
			<Card title={tempData.title} text={tempData.text} />
		</main>
	);
}
