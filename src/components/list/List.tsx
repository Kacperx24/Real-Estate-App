'use client'

import { GET_PROPERTIES_FOR_LIST } from '@/graphql'
import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import PropertyCard from './PropertyCard'
import { PropertyDataForList } from '@/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useRouter } from 'next/navigation'
import useFilters from '@/hooks/useFilters'
import Spinner from '../ui/Spinner'

const List = () => {
	const { data, loading } = useQuery(GET_PROPERTIES_FOR_LIST)
	const isMobile = useMediaQuery()
	const { filterData } = useFilters()

	const filteredData = filterData(data?.realEstates)

	const router = useRouter()

	useEffect(() => {
		if (filteredData && !isMobile) router.push(`/${filteredData[0].id}`)
	}, [data])

	if (loading)
		return (
			<div className='w-full max-w-[410px] lg:max-w-[430px]'>
				<Spinner />
			</div>
		)

	return (
		<div className='flex w-full max-w-[410px] flex-col border-border pt-8 md:ml-6 md:max-h-full md:border-r-2 lg:max-w-[430px]'>
			<h2 className='text-center'>Search results ({filteredData?.length})</h2>
			<div className='mt-6 md:mt-10 md:h-0 md:flex-grow md:overflow-auto md:pr-10'>
				<div className='mb-12 flex flex-col items-center gap-4 md:gap-5'>
					{filteredData?.map((item: PropertyDataForList) => (
						<PropertyCard key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default List
