/** @format */

import { ReactElement, SyntheticEvent, useRef, useState } from 'react'
import { FaAlgolia, FaSearch } from 'react-icons/fa'

type Props = {
	newQuery: any
}

export default function Input({ newQuery }: Props): ReactElement {
	const [state, setState] = useState(false)

	let formRef = useRef<HTMLFormElement>(null!)

	const handleSubmit = (ev: SyntheticEvent): void => {
		ev.preventDefault()

		const formData: FormData = new FormData(formRef.current)

		const data = {
			query: formData.get('search'),
		}

		if (data.query !== '') {
			setState(false)
			newQuery(data.query as string)
		} else {
			setState(true)
		}
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='form' action='/' ref={formRef}>
				<label htmlFor='search' className='label'>
					{state ? 'Introduzca un criterio de búsqueda' : null}
				</label>
				<div className='input_cont'>
					<input
						type='text'
						placeholder='Realizar una búsqueda'
						name='search'
						className='input'
					/>
					<button className='form_btn'>
						<FaSearch size='25px' color='#5468ff' />
					</button>
				</div>
				<div className='algolia'>
					{' '}
					<p>Search by algolia</p> <FaAlgolia size='15px' color='#5468ff' />{' '}
				</div>
			</form>
			<style jsx>{`
				.container {
					width: 320px;
					height: 84px;
					padding-inline: 12px;
					padding-block-start: 10px;
					padding-block-end: 5px;
					border-radius: 4px;
					background-color: #f5f6f7;
					box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
				}
				.label {
					color: #c00142;
					font-size: 1.2rem;
					font-weight: bold;
					letter-spacing: 1px;
					line-height: calc(1.2rem * 1.4);
				}
				.input_cont {
					display: flex;
					width: 100%;
					height: 40px;
					border: 2px solid #5468ff;
					border-radius: 4px;
					align-items: center;
					gap: 5px;
					background-color: #fff;
				}
				.input {
					width: 80%;
					height: 100%;
					appearance: none;
					background: 0 0;
					border: 0;
					outline: 0;
					flex: 1;
					padding-inline-start: 10px;
					color: #333333;
					font-size: 1.8rem;
					font-weight: 400;
					letter-spacing: 0px;
					line-height: calc(1.8rem * 1.4);
				}
				.input::placeholder {
					color: #333333;
					opacity: 0.5;
				}
				.form_btn {
					display: flex;
					padding-inline: 5px;
					justify-content: center;
					align-items: center;
					border-style: none;
					background-color: #fff;
					cursor: pointer;
				}

				.algolia {
					display: flex;
					width: 100%;
					height: auto;
					margin-block-start: 2px;
					justify-content: flex-end;
					align-items: center;
					gap: 2px;
					font-size: 1rem;
				}
				@media screen and (min-width: 720px) {
					.container {
						width: 420px;
					}
				}
			`}</style>
		</div>
	)
}
