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
			{value}m<sup>2</sup>
			<p className='absolute top-[125%] w-full text-sm font-normal text-secondary-light'>
				{type}
			</p>
		</div>
	)
}

const AreaFilter = () => {
	const [minMaxValue, setMinMaxValue] = useState({ min: 25, max: 500 })

	const {
		updateFilter,
		filters: { propertyType },
	} = useFilters()

	useEffect(() => {
		updateFilter('minArea', minMaxValue.min)
		updateFilter('maxArea', minMaxValue.max)
	}, [minMaxValue])

	useEffect(() => {
		setMinMaxValue(
			propertyType === 'apartment'
				? { min: 25, max: 200 }
				: { min: 25, max: 500 }
		)
	}, [propertyType])

	return (
		<div className='mt-8'>
			<h2 className='text-center lg:ml-2 lg:text-left lg:text-[15px]'>
				Area range
			</h2>
			<div className='mt-6 flex w-[240px] gap-4'>
				<MultiRangeInput
					minMaxValue={minMaxValue}
					setMinMaxValue={setMinMaxValue}
					min={25}
					max={propertyType === 'apartment' ? 200 : 500}
					step={5}
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

export default AreaFilter
