import React, { useState } from 'react'
import Modal from 'react-modal'

import styles from './FeedbackForm.module.css'

Modal.setAppElement('#root') // Установите это, чтобы избежать проблем с доступностью

function FeedbackForm({ id }) {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		comment: ''
	})

	const [successMessage, setSuccessMessage] = useState('')

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()

		fetch('/mail/mail.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					setSuccessMessage('Сообщение успешно отправлено!')
					setFormData({
						fullName: '',
						phone: '',
						email: '',
						comment: ''
					})
				} else {
					console.error('Произошла ошибка:', data.message)
				}
			})
			.catch(error => {
				console.error('Произошла ошибка:', error)
			})

		closeModal()
		setFormData({
			fullName: '',
			phone: '',
			email: '',
			comment: ''
		})
	}

	return (
		<div className={styles.bgSize} id={id}>
			<button onClick={openModal}>Форма обратной связи</button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<div className={styles.feedback_title}>
					<p>Свяжитесь с нами</p>
					<p>Мы поможем подобрать лучшее решение</p>
				</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor='fullName'>Ваше имя</label>
						<input
							type='text'
							id='fullName'
							name='fullName'
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='email'>Ваш email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='phone'>Ваш телефон</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='comment'>Вопрос</label>
						<textarea
							style={{ resize: 'none' }}
							id='comment'
							name='comment'
							rows='4'
							value={formData.comment}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<div className={styles.formActions}>
						<button type='submit'>Отправить</button>
						<p>
							Нажимая на кнопку, я даю согласие на обработку персональных данных
						</p>
						<div className={styles.close} onClick={closeModal}>
						&#x2715;
						</div>
					</div>
				</form>
				{successMessage && (
					<p className={styles.successMessage}>{successMessage}</p>
				)}
			</Modal>
		</div>
	)
}

export default FeedbackForm
