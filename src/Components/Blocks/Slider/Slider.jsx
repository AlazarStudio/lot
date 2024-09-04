import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { slides } from '../../../../data'

import styles from './Slider.module.css'

function Slider({ children, ...props }) {
	const [swiper, setSwiper] = useState()
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<div className={styles.slider_wrapper}>
			<Swiper
				className={styles.sliderBox}
				slidesPerView={1}
				direction='horizontal'
				loop={true}
				pagination={{ clickable: true }}
				onSwiper={setSwiper}
				onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
				modules={[Pagination]}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className={styles.slide}>
							<img src={slide.img} alt='' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
