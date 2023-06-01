import React from 'react'
import PropertyTypeFilter from './PropertyTypeFilter'
import RoomsFilter from './RoomsFilter'
import PriceFilter from './PriceFilter'
import AreaFilter from './AreaFilter'

const Filters = () => {
	return (
		<div className='flex h-full w-full flex-grow flex-col items-center overflow-auto border-border px-3 py-8 md:w-[300px] md:border-r-2'>
			<h1>Filters</h1>
			<PropertyTypeFilter />
			<PriceFilter />
			<RoomsFilter />
			<AreaFilter />
		</div>
	)
}

export default Filters
