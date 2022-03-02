/** @format */

import { ReactElement } from 'react'
import Input from '@components/Input/Input'
type Props = {
	newQuery: any
}
export default function Header({ newQuery }: Props): ReactElement {
	return (
		<div className='header'>
			<Input newQuery={newQuery} />
			<style jsx>{`
				.header {
					display: flex;
					width: 100%;
					height: 100px;
					position: fixed;
					top: 0;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background-color: rgba(82, 102, 255, 0.5);
					backdrop-filter: blur(10px);
					box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
				}
			`}</style>
		</div>
	)
}
