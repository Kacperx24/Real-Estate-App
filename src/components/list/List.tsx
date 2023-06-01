'use client'

import { GET_PROPERTIES } from '@/graphql'
import { useQuery } from '@apollo/client'
import React from 'react'

const List = () => {
	const { data, loading, error } = useQuery(GET_PROPERTIES)
	console.log(data, error)
	return <div>List</div>
}

export default List
