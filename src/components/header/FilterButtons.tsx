'use client'

import useFilters from '@/hooks/useFilters'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

const FilterButtons = () => {
	const isMobile = useMediaQuery()

	const pathname = usePathname()
	const router = useRouter()

	const {
		updateFilter,
		filters: { transactionType },
	} = useFilters()

	const isRentPrice = transactionType === 'rent'

	return (
		<div className='relative flex w-full justify-center gap-4 text-secondary-light md:order-2 md:ml-16 md:w-[540px] md:justify-normal md:gap-8'>
			{isMobile && pathname !== '/' ? (
				<div className='absolute left-4' onClick={() => router.back()}>
					<ArrowLeftIcon className='h-6 w-6 text-secondary-extralight' />
				</div>
			) : null}
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
