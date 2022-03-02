/** @format */

import { useEffect, useReducer } from 'react'
import fetch from 'isomorphic-unfetch'

interface ActionInterface {
	type: string
	payload?: any
}

interface StateInterface {
	theQuery: string
	loading: boolean
	postList: object[]
	fetchError: string
}

const URL = process.env.URL_BASE

const initialState = {
	theQuery: 'reactjs',
	loading: true,
	postList: [],
	fetchError: '',
}

const ACTION_TYPES = {
	LOADING: 'REQUEST',
	SUCCESS: 'SUCCESS',
	ERROR: 'FAILURE',
}

const reducer = (state: StateInterface, action: ActionInterface) => {
	switch (action.type) {
		case ACTION_TYPES.LOADING:
			return { ...state, loading: true, theQuery: action.payload }
		case ACTION_TYPES.SUCCESS:
			return { ...state, loading: false, postList: action.payload, fetchError: '' }
		case ACTION_TYPES.ERROR:
			return { ...state, loading: false, postList: [], fetchError: action.payload }
		default:
			return { ...state }
	}
}

export default function useFetch() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		async function Algolia() {
			try {
				const response = await fetch(`${URL}search_by_date?query=${state.theQuery}`)
				const data = await response.json()
				console.log(data.hits)
				dispatch({
					type: ACTION_TYPES.SUCCESS,
					payload: data.hits,
				})
			} catch (err) {
				dispatch({
					type: ACTION_TYPES.ERROR,
					payload: err,
				})
			}
		}
		Algolia()
	}, [state.theQuery])

	const newQuery = (query: string): void =>
		dispatch({
			type: ACTION_TYPES.LOADING,
			payload: query,
		})

	return {
		fetchStates: state,
		newQuery,
	}
}
