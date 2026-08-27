import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CheckCircle, Mail, Phone, X, AlertCircle } from 'lucide-react';

import './Index.css';

type ConsultationModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
	const [status, setStatus] = useState<SubmitStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && status !== 'submitting') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose, status]);

	// Reset the form state when the modal is closed.
	useEffect(() => {
		if (!isOpen) {
			const timer = setTimeout(() => {
				setStatus('idle');
				setErrorMessage('');
			}, 0);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setStatus('submitting');
		setErrorMessage('');

		const form = event.currentTarget;
		const formData = new FormData(form);

		const data = {
			fullName: formData.get('fullName'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			studyLevel: formData.get('studyLevel'),
			destination: formData.get('destination'),
			budget: formData.get('budget'),
			message: formData.get('message'),
		};

		try {
			const response = await fetch('/api/consultation', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Unable to submit your consultation request.');
			}

			setStatus('success');
			form.reset();
		} catch (error) {
			console.error('Consultation submission failed:', error);

			setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');

			setStatus('error');
		}
	};

	const handleRetry = () => {
		setStatus('idle');
		setErrorMessage('');
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='consultation-modal'
					role='dialog'
					aria-modal='true'
					aria-labelledby='consultation-modal-title'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onMouseDown={() => {
						if (status !== 'submitting') {
							onClose();
						}
					}}
				>
					<motion.div
						className='consultation-modal__dialog'
						initial={{
							opacity: 0,
							y: 35,
							scale: 0.97,
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							y: 25,
							scale: 0.97,
						}}
						transition={{
							duration: 0.3,
							ease: 'easeOut',
						}}
						onMouseDown={(event) => event.stopPropagation()}
					>
						<button type='button' className='consultation-modal__close' onClick={onClose} disabled={status === 'submitting'} aria-label='Close consultation form'>
							<X size={20} />
						</button>

						{/* LEFT SIDE */}

						<div className='consultation-modal__info'>
							<span className='consultation-modal__eyebrow'>Contact Us</span>

							<h2 id='consultation-modal-title'>
								Ready to Find
								<br />
								Your Ideal Study
								<br />
								Abroad Option?
							</h2>

							<p className='consultation-modal__intro'>Tell us where you want to go and what your budget looks like. Let&apos;s talk and match you with the perfect opportunity.</p>

							<div className='consultation-modal__other-info'>
								<h3>Other info</h3>

								<a href='mailto:contactmoneclat@gmail.com'>
									<Mail size={17} />
									<span>contactmoneclat@gmail.com</span>
								</a>

								<a href='tel:+2340000000000'>
									<Phone size={17} />
									<span>+234 (0) 000 000 0000</span>
								</a>
							</div>
						</div>

						{/* RIGHT SIDE */}

						<div className='consultation-modal__form-wrapper'>
							<AnimatePresence mode='wait'>
								{/* =========================
									SUCCESS
								========================= */}

								{status === 'success' && (
									<motion.div
										key='success'
										className='consultation-result consultation-result--success'
										initial={{
											opacity: 0,
											scale: 0.95,
										}}
										animate={{
											opacity: 1,
											scale: 1,
										}}
										exit={{
											opacity: 0,
											scale: 0.95,
										}}
									>
										<motion.div
											className='consultation-result__icon'
											initial={{
												scale: 0,
											}}
											animate={{
												scale: 1,
											}}
											transition={{
												delay: 0.15,
												type: 'spring',
												stiffness: 200,
											}}
										>
											<CheckCircle size={42} />
										</motion.div>

										<h2>Consultation Request Received</h2>

										<p>Thank you for reaching out. Our team will review your information and get back to you shortly.</p>

										<button type='button' className='consultation-result__button' onClick={onClose}>
											Done
										</button>
									</motion.div>
								)}

								{/* =========================
									ERROR
								========================= */}

								{status === 'error' && (
									<motion.div
										key='error'
										className='consultation-result consultation-result--error'
										initial={{
											opacity: 0,
											scale: 0.95,
										}}
										animate={{
											opacity: 1,
											scale: 1,
										}}
										exit={{
											opacity: 0,
											scale: 0.95,
										}}
									>
										<div className='consultation-result__icon'>
											<AlertCircle size={42} />
										</div>

										<h2>Something Went Wrong</h2>

										<p>{errorMessage || 'We could not submit your request. Please try again.'}</p>

										<div className='consultation-result__actions'>
											<button type='button' className='consultation-result__button' onClick={handleRetry}>
												Try Again
											</button>

											<button type='button' className='consultation-result__secondary' onClick={onClose}>
												Close
											</button>
										</div>
									</motion.div>
								)}

								{/* =========================
									FORM
								========================= */}

								{(status === 'idle' || status === 'submitting') && (
									<motion.form
										key='form'
										className='consultation-form'
										onSubmit={handleSubmit}
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
										}}
										exit={{
											opacity: 0,
										}}
									>
										<div className='consultation-form__grid'>
											<div className='form-field'>
												<label htmlFor='fullName'>Full Name</label>

												<input id='fullName' name='fullName' type='text' placeholder='e.g., Jane Smith' required disabled={status === 'submitting'} />
											</div>

											<div className='form-field'>
												<label htmlFor='email'>Email Address</label>

												<input id='email' name='email' type='email' placeholder='e.g., janesmith@gmail.com' required disabled={status === 'submitting'} />
											</div>

											<div className='form-field'>
												<label htmlFor='phone'>Phone Number / WhatsApp</label>

												<input id='phone' name='phone' type='tel' placeholder='e.g., +234 (0) 000 000 0000' required disabled={status === 'submitting'} />
											</div>

											<div className='form-field'>
												<label htmlFor='studyLevel'>Level of Study</label>

												<select id='studyLevel' name='studyLevel' defaultValue='' required disabled={status === 'submitting'}>
													<option value='' disabled>
														Select level of study
													</option>

													<option value='bsc'>BSc / Undergraduate</option>

													<option value='masters'>Master&apos;s</option>

													<option value='phd'>PhD</option>
												</select>
											</div>

											<div className='form-field'>
												<label htmlFor='destination'>Preferred Destination</label>

												<select id='destination' name='destination' defaultValue='' required disabled={status === 'submitting'}>
													<option value='' disabled>
														Select preferred destination
													</option>

													<option value='uk'>United Kingdom</option>

													<option value='canada'>Canada</option>

													<option value='usa'>United States</option>

													<option value='australia'>Australia</option>

													<option value='germany'>Germany</option>

													<option value='other'>Other</option>
												</select>
											</div>

											<div className='form-field'>
												<label htmlFor='budget'>Estimated Budget Range</label>

												<select id='budget' name='budget' defaultValue='' required disabled={status === 'submitting'}>
													<option value='' disabled>
														Select Budget
													</option>

													<option value='under-5m'>Under ₦5m</option>

													<option value='5m-10m'>₦5m - ₦10m</option>

													<option value='10m-20m'>₦10m - ₦20m</option>

													<option value='20m-plus'>₦20m+</option>

													<option value='unsure'>Not sure yet</option>
												</select>
											</div>

											<div className='form-field form-field--full'>
												<label htmlFor='message'>Brief Message / Questions</label>

												<textarea id='message' name='message' placeholder='Tell us a bit about your background or specific desires...' rows={4} disabled={status === 'submitting'} />
											</div>
										</div>

										<button type='submit' className='consultation-form__submit' disabled={status === 'submitting'}>
											{status === 'submitting' ? (
												<span className='submit-loading'>
													<span />
													<span />
													<span />
													Submitting...
												</span>
											) : (
												'Submit'
											)}
										</button>
									</motion.form>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
