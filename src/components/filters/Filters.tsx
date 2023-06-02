'use client'

import PropertyTypeFilter from './PropertyTypeFilter'
import RoomsFilter from './RoomsFilter'
import PriceFilter from './PriceFilter'
import AreaFilter from './AreaFilter'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Filters = () => {
	const isMobile = useMediaQuery()
	const [filtersAreOpen, setFiltersAreOpen] = useState(false)

	return (
		// <div className='max-h-full border-border md:border-r-2 '>
		// 	<div className='mb-4 flex w-full flex-col items-center px-3 pt-8 md:mb-0 md:max-h-full '>
		<div className='flex flex-col border-border pt-2 md:max-h-full md:w-[300px] md:border-r-2 md:pt-8'>
			<div className='relative mx-auto mt-4 w-fit md:mt-0'>
				<h1 className='text-center'>Filters</h1>
				{isMobile ? (
					<div
						className='absolute left-[125%] top-0 flex h-full cursor-pointer items-center'
						onClick={() => setFiltersAreOpen(prev => !prev)}
					>
						{' '}
						{filtersAreOpen ? (
							<ChevronDownIcon className='h-5 w-5' />
						) : (
							<ChevronUpIcon className='h-5 w-5' />
						)}
					</div>
				) : null}
			</div>
			{!isMobile || filtersAreOpen ? (
				<div className='mt-8 flex w-full flex-col items-center md:h-0 md:flex-grow md:overflow-auto md:pb-12'>
					<PropertyTypeFilter />
					<PriceFilter />
					<RoomsFilter />
					<AreaFilter />{' '}
				</div>
			) : null}
			{/* </div> */}
		</div>
	)
}

export default Filters