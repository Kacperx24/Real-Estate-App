import React, { FC } from 'react'
import PriceLabel from '../list/PriceLabel'
import { MapPinIcon } from '@heroicons/react/24/solid'

interface PropertyHeaderProps {
	title: string
	location: string
	rentPrice: number
}

const PropertyHeader: FC<PropertyHeaderProps> = ({
	title,
	location,
	rentPrice,
}) => {
	return (
		<div className='mx-2 flex w-full items-center justify-between gap-10 pt-5'>
			<div className='w-0 flex-grow'>
				<h1>{title}</h1>
				<p className='mt-3 text-sm text-secondary-light md:text-[15px]'>
					<MapPinIcon className='mb-1 mr-2 inline-block h-4 w-4' />
					{location}
				</p>
			</div>
			<div className='w-fit'>
				<PriceLabel price={rentPrice} variant='large' />
			</div>
		</div>
	)
}

export default PropertyHeader
