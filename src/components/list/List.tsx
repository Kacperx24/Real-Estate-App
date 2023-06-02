'use client'

import { GET_PROPERTIES_FOR_LIST } from '@/graphql'
import { useQuery } from '@apollo/client'
import React from 'react'
import PropertyCard from './PropertyCard'
import { PropertyDataForList } from '@/types'

const List = () => {
	const { data, loading, error } = useQuery(GET_PROPERTIES_FOR_LIST)

	if (loading) return <p>Loading</p>
	return (
		<div className='flex flex-col border-border pt-8 md:ml-6 md:max-h-full md:border-r-2'>
			<h2 className='text-center'>
				Search results ({data?.realEstates.length})
			</h2>
			<div className='mt-6 md:mt-10 md:h-0 md:flex-grow md:overflow-auto md:pr-10'>
				<div className='flex flex-col items-center gap-4 md:mb-12 md:gap-5'>
					{data?.realEstates.map((item: PropertyDataForList) => (
						<PropertyCard key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default List
