/** @format */

import React, { ReactElement } from 'react'
import CreatedAt from '@utils/CreatedAt'
import { ImPencil2, ImClock } from 'react-icons/im'

type Props = {
	title: string | null
	author: string | null
	created_at: string
}

export default function Card({ title, author, created_at }: Props): ReactElement {
	return (
		<div className='card'>
			<h2 className='card__title'>{title}</h2>
			<div className='card__info'>
				<p className='card__author'>
					<ImPencil2 size='10px' color='#333' />
					{author}
				</p>
				<p className='card__created_at'>
					<ImClock size='10px' color='#333' />
					{CreatedAt(created_at)}
				</p>
			</div>
			<style jsx>{`
				.card {
					display: flex;
					width: 320px;
					min-height: 40px;
					padding-inline: 10px;
					padding-block: 10px;
					border-radius: 4px;
					flex-direction: column;
					gap: 10px;
					background-color: #f5f6f7;
					box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
				}
				.card__title {
					color: #333;
					font-size: 1.6rem;
					font-weight: 600;
					letter-spacing: 0px;
					line-height: calc(1.6rem * 1.4);
				}
				.card__info {
					display: flex;
					padding-block-start: 4px;
					border-top: 1px solid #5468ff;
					align-items: center;
					gap: 20px;
				}
				.card__author {
					display: flex;
					align-items: center;
					gap: 3px;
					color: #333;
					font-size: 1.4rem;
					font-weight: 400;
					letter-spacing: 0px;
					line-height: calc(1.4rem * 1.4);
				}
				.card__created_at {
					display: flex;
					align-items: center;
					gap: 3px;
					color: #333;
					font-size: 1.4rem;
					font-weight: 600;
					letter-spacing: 0px;
					line-height: calc(1.4rem * 1.4);
				}
				@media screen and (min-width: 720px) {
					.card {
						width: 420px;
					}
				}
			`}</style>
		</div>
	)
}
