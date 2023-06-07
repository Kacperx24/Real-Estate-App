'use client'

import useFilters from '@/hooks/useFilters'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter } from 'next/navigation'

import React, { FC } from 'react'

interface ButtonProps {
	isActive: boolean
	text: string
	onClick: () => void
}

const Button: FC<ButtonProps> = ({ isActive, text, onClick }) => (
	<button className='relative' onClick={onClick}>
		<p
			className={`text-sm font-medium lg:text-[15px] ${
				isActive ? 'text-primary-main' : ''
			}`}
		>
			{text}
		</p>
		{isActive ? (
			<div className='absolute left-1/2 top-[140%] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-primary-main' />
		) : null}
	</button>
)

const FilterButtons = () => {
	const isMobile = useMediaQuery()

	const pathname = usePathname()
	const router = useRouter()

	const {
		updateFilter,
		filters: { transactionType },
	} = useFilters()

	const isRentPrice = transactionType === 'rent'

	const handleButtonClick = (transactionType: string) => {
		updateFilter('transactionType', transactionType)
	}

	return (
		<div className='relative flex w-full justify-center gap-4 text-secondary-light md:order-2 md:ml-16 md:w-[540px] md:justify-normal md:gap-8'>
			{isMobile && pathname !== '/' ? (
				<div className='absolute left-4' onClick={() => router.back()}>
					<ArrowLeftIcon className='h-6 w-6 text-secondary-extralight' />
				</div>
			) : null}
			<Button
				isActive={!isRentPrice}
				text='Buy'
				onClick={() => handleButtonClick('buy')}
			/>
			<Button
				isActive={isRentPrice}
				text='Rent'
				onClick={() => handleButtonClick('rent')}
			/>
		</div>
	)
}

export default FilterButtons
