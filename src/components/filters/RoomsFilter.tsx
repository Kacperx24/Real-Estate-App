import React from 'react'

const roomsOptions = ['1', '2', '3', '4+']

const RoomsFilter = () => {
	return (
		<div className='mt-8'>
			<h2 className='text-center'>Rooms</h2>
			<div className='mt-6 flex w-[240px] gap-3'>
				{roomsOptions.map(item => (
					<button className='h-10 w-0 flex-grow rounded-md bg-white' key={item}>
						{item}
					</button>
				))}
			</div>
		</div>
	)
}

export default RoomsFilter
