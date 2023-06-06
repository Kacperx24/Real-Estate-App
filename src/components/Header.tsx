'use client'

import React from 'react'
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useFilters from '@/hooks/useFilters'

const Header = () => {
	const {
		updateFilter,
		filters: { transactionType },
	} = useFilters()

	const isRentPrice = transactionType === 'rent'

	return (
		<header className='flex flex-col items-center gap-7 border-b-2 border-border px-2 py-6 md:flex-row md:px-10'>
			<div className='md:w-[200px]'>
				<p className='flex text-[16px] font-medium'>
					<HomeIcon className='mr-3 h-6 w-6' /> Real.est
				</p>
			</div>
			<div className='flex items-center gap-5 px-6 md:order-3'>
				<MagnifyingGlassIcon className='h-6 w-6 text-secondary-light' />
				<input
					className='w-[260px] flex-grow'
					placeholder='Search for houses, apartments...'
				/>
			</div>
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
		</header>
	)
}

export default Header
