import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './Footer.module.css'

function Footer({ ...props }) {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<div>
					<img src='/images/lot_logo.png' alt='' />
				</div>
				<div className={styles.footer_info}>
					<p>Адрес</p>
					<p>О компании</p>
				</div>
				<div className={styles.footer_line}>
					<p className={styles.footer_info2}>OOO</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
