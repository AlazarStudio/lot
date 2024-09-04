import { news } from '../../../../data'
import NewsItem from '../NewsItem/NewsItem'

import styles from './NewsBlock.module.css'

function NewsBlock({ children, ...props }) {
	return (
		<section className={styles.news_section}>
			<p className={styles.news_title}>Новости</p>
			<div className={styles.news_wrapper}>
				{news.map((news_item, index) => (
					<NewsItem key={index} {...news_item} />
				))}
			</div>
		</section>
	)
}

export default NewsBlock
