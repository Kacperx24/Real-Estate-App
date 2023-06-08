'use client'

import useFilters from '@/hooks/useFilters'
import React from 'react'

const roomsOptions = ['1', '2', '3', '4+']

const RoomsFilter = () => {
	const {
		filters: { rooms },
		updateFilter,
	} = useFilters()

	const updateRoom = (value: string) => {
		const newValue = parseInt(value[0])

		if (rooms.includes(newValue))
			return updateFilter(
				'rooms',
				rooms.filter(room => room !== newValue)
			)

		updateFilter('rooms', [...rooms, newValue])
	}

	return (
		<div className='mt-8'>
			<h2 className='text-center lg:ml-2 lg:text-left lg:text-[15px]'>Rooms</h2>
			<div className='mt-6 flex w-[240px] gap-3 lg:mt-4'>
				{roomsOptions.map(item => (
					<button
						className={`h-10 w-0 flex-grow rounded-md  ${
							rooms.includes(parseInt(item[0]))
								? 'bg-primary-main text-white'
								: 'bg-white'
						}`}
						onClick={() => updateRoom(item)}
						key={item}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	)
}

export default RoomsFilter
