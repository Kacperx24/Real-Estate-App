'use client'

import React, { FC, useEffect, useState } from 'react'
import MultiRangeInput from '../ui/MultiRangeInput'
import { MinusIcon } from '@heroicons/react/24/solid'
import useFilters from '@/hooks/useFilters'

interface MinMaxDisplayProps {
	type: 'min' | 'max'
	value: number
}

const MinMaxDisplay: FC<MinMaxDisplayProps> = ({ type, value }) => {
	return (
		<div className='relative w-0 flex-grow rounded bg-white py-2 text-center text-[15px] font-medium'>
			${value}
			<p className='absolute top-[125%] w-full text-sm font-normal text-secondary-light'>
				{type}
			</p>
		</div>
	)
}

const PriceFilter = () => {
	const {
		updateFilter,
		filters: { transactionType },
	} = useFilters()

	const [minMaxValue, setMinMaxValue] = useState({ min: 1000, max: 3000 })

	useEffect(() => {
		updateFilter('minPrice', minMaxValue.min)
		updateFilter('maxPrice', minMaxValue.max)
	}, [minMaxValue])

	useEffect(() => {
		setMinMaxValue(
			transactionType === 'rent'
				? { min: 1000, max: 3000 }
				: { min: 150000, max: 400000 }
		)
	}, [transactionType])

	return (
		<div className='mt-8'>
			<h2 className='text-center'>Price range</h2>
			<div className='mt-6 flex w-[240px] gap-4'>
				<MultiRangeInput
					minMaxValue={minMaxValue}
					setMinMaxValue={setMinMaxValue}
					min={transactionType === 'rent' ? 500 : 80000}
					max={transactionType === 'rent' ? 5000 : 750000}
					step={transactionType === 'rent' ? 100 : 10000}
				/>
			</div>
			<div className='mb-6 mt-8 flex w-full items-center justify-between'>
				<MinMaxDisplay type='min' value={minMaxValue.min} />
				<MinusIcon className='mx-5 h-6 w-6 text-secondary-extralight' />
				<MinMaxDisplay type='max' value={minMaxValue.max} />
			</div>
		</div>
	)
}

export default PriceFilter
