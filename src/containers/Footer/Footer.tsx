/** @format */

import { ReactElement } from 'react'

const myGitHub: string = 'https://github.com/ChristBM'

export default function Footer(): ReactElement {
	return (
		<div className='footer'>
			<p className='footer__text'>
				Coded by{' '}
				<a className='footer__text_link' href={myGitHub} target='_blank' rel='noreferrer'>
					ChristBM
				</a>
			</p>
			<style jsx>{`
				.footer {
					display: flex;
					width: 100%;
					height: 30px;
					position: fixed;
					bottom: 0;
					justify-content: center;
					align-items: center;
					background-color: #5468ff;
				}
				.footer__text {
					color: #fff;
					font-size: 1.8rem;
					font-weight: 300;
					letter-spacing: 1px;
					line-height: calc(1.8rem * 1.4);
				}
				.footer__text_link {
					font-weight: 500;
				}
				.footer__text_link:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	)
}
