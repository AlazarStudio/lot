import { products } from '../../../../data'
import Product from '../Product/Product'

import styles from './Products.module.css'

function Products({ id }) {
	return (
		<div className={styles.products} id={id}>
			<section className={styles.products_wrapper}>
				{products.map((product, index) => (
					<Product key={index} {...product} />
				))}
			</section>

			<button>
				Скачать каталог
			</button>
		</div>
	)
}

export default Products
