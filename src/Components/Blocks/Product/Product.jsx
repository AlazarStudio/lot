import styles from './Product.module.css'

function Product({ children, ...props }) {
	return (
		<div className={styles.product}>
			<p className={styles.title}>{props.title}</p>
			<div className={styles.product_img}>
				<img src={props.img} alt='' />
			</div>
			<p className={styles.application}>{props.application}</p>
			<p className={styles.description} style={{ color: '#575257' }}>
				{props.description}
			</p>
		</div>
	)
}

export default Product
