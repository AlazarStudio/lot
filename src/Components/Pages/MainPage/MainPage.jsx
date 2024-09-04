import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import FeedbackForm from '../../Blocks/FeedbackForm/FeedbackForm'
import NewsBlock from '../../Blocks/NewsBlock/NewsBlock'
import Products from '../../Blocks/Products/Products'
import Slider from '../../Blocks/Slider/Slider'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './MainPage.module.css'

function MainPage({ children, ...props }) {
	const location = useLocation()

	useEffect(() => {
		const section = new URLSearchParams(location.search).get('section')
		if (section) {
			const element = document.getElementById(section)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location])
	
	return (
		<main className={styles.main_main}>
			<Slider />
			<CenterBlock>
				<WidthBlock>
					<Products id='catalog' />
				</WidthBlock>
			</CenterBlock>
			<CenterBlock background='/images/banner.png' backSize='cover'>
				<WidthBlock>
					<FeedbackForm id='form' />
				</WidthBlock>
			</CenterBlock>
			<CenterBlock>
				<WidthBlock>
					<NewsBlock />
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default MainPage
