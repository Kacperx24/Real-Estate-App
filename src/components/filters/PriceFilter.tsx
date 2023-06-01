'use client'

import React, { FC, useState } from 'react'
import MultiRangeInput from '../ui/MultiRangeInput'
import { MinusIcon } from '@heroicons/react/24/solid'

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
	const [minMaxValue, setMinMaxValue] = useState({ min: 2500, max: 7500 })

	return (
		<div className='mt-8'>
			<h2 className='text-center'>Price range</h2>
			<div className='mt-6 flex w-[240px] gap-4'>
				<MultiRangeInput
					minMaxValue={minMaxValue}
					setMinMaxValue={setMinMaxValue}
					min={500}
					max={10000}
					step={100}
				/>
			</div>
			<div className='mb-6 mt-8 flex w-full items-center justify-between'>
				<MinMaxDisplay type='min' value={minMaxValue.min} />
				<MinusIcon className='mx-5 h-6 w-6 text-secondary-extraLight' />
				<MinMaxDisplay type='max' value={minMaxValue.max} />
			</div>
		</div>
	)
}

export default PriceFilter
