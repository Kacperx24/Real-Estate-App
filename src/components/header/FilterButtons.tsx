'use client'

import useFilters from '@/hooks/useFilters'

import React from 'react'

const FilterButtons = () => {
	const {
		updateFilter,
		filters: { transactionType },
	} = useFilters()

	const isRentPrice = transactionType === 'rent'

	return (
		<div className='flex gap-4 text-secondary-light md:order-2 md:ml-16 md:w-[540px] md:gap-8'>
			<button onClick={() => updateFilter('transactionType', 'buy')}>
				<p
					className={`text-sm font-medium ${
						!isRentPrice ? 'text-primary-main' : ''
					}`}
				>
					Buy
				</p>
			</button>
			<button onClick={() => updateFilter('transactionType', 'rent')}>
				<p
					className={`text-sm font-medium ${
						isRentPrice ? 'text-primary-main' : ''
					}`}
				>
					Rent
				</p>
			</button>
		</div>
	)
}

export default FilterButtons
