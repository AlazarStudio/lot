import { Link } from 'react-router-dom'

import styles from './Header.module.css'

function Header({ children, ...props }) {
	const scrollBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth'
		})
	}
	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<img src='/images/lot_logo.png' alt='' />
				<nav>
					<ul className={styles.nav_list}>
						<li>
							<Link to='/?section=catalog'> Декоративные краски </Link>
						</li>
						<li onClick={scrollBottom} style={{ cursor: 'pointer' }}>
							О компании
						</li>
						<li>
							<Link to='/?section=form'>Где купить</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
