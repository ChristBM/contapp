/** @format */

import { ReactElement } from 'react'
import Footer from '@containers/Footer/Footer'
import Header from '@containers/Header/Header'
import MainHome from '@containers/MainHome/MainHome'
import useFetch from '@hooks/useFetch'

export default function HomeLayout(): ReactElement {
	let { fetchStates, newQuery } = useFetch()
	let { loading, postList, fetchError } = fetchStates
	return (
		<div>
			<header>
				<Header newQuery={newQuery} />
			</header>

			<main>
				<MainHome loading={loading} postList={postList} fetchError={fetchError} />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	)
}
