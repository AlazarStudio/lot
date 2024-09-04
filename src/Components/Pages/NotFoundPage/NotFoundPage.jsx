import styles from './NotFoundPage.module.css'

function NotFoundPage({ children, ...props }) {
	return (
		<main
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<p className={styles.not_found}>Страница не найдена 404</p>
		</main>
	)
}

export default NotFoundPage
