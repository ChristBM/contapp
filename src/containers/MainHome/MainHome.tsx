/** @format */

import ClipLoader from 'react-spinners/ClipLoader'
import { BiError } from 'react-icons/bi'
import Card from '@components/Card/Card'

type Props = {
	loading: any
	postList: any
	fetchError: any
}

export default function MainHome({ loading, postList, fetchError }: Props) {
	return (
		<div className='main'>
			{loading ? (
				<ClipLoader color={'#FFF'} loading={true} size={100} />
			) : (
				postList.map((hit: any) => (
					<Card
						key={hit.objectID}
						title={hit.title}
						author={hit.author}
						created_at={hit.created_at}
					/>
				))
			)}
			{fetchError !== '' ? (
				<div>
					<BiError size='100px' color='#c00142' />
					<h2>¡Ha ocurrido un error!</h2>
				</div>
			) : null}
			<style jsx>{`
				.main {
					display: flex;
					width: 100%;
					padding-block-start: 110px;
					padding-block-end: 40px;
					min-height: 100vh;
					flex-direction: column;
					align-items: center;
					gap: 10px;
					background-image: linear-gradient(
						to right top,
						#1d2128,
						#1b355b,
						#134991,
						#265ac9,
						#5468ff
					);
				}
			`}</style>
		</div>
	)
}
