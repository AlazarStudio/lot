import styles from './NewsItem.module.css'

function NewsItem({ children, ...props }) {
	return (
		<div className={styles.news_item__wrapper}>
			<div className={styles.item1}>
				<img src={props.img} alt='' />
			</div>
			<div className={styles.item2}>
				<p>{props.title}</p>
				<button>Подробнее</button>
			</div>
		</div>
	)
}

export default NewsItem
