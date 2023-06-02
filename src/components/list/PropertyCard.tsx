import { PropertyDataForList } from '@/types'
import Image from 'next/image'
import React, { FC } from 'react'
import Label from '../ui/Label'
import { HomeIcon } from '@heroicons/react/24/solid'

interface PropertyCardProps {
	data: PropertyDataForList
}

const PropertyCard: FC<PropertyCardProps> = ({ data }) => {
	const {
		title,
		rooms,
		location,
		type,
		image: { id: imageId, url },
		squareMeters,
		rentPrice,
		id,
	} = data || {}

	return (
		<div className=' flex h-36 w-11/12 min-w-[320px] max-w-md gap-2 rounded-xl bg-white p-2 pr-6 md:w-96'>
			<div className=' relative h-full w-2/5 overflow-hidden rounded-lg'>
				<Image src={url} fill alt={location} style={{ objectFit: 'cover' }} />
			</div>
			<div className='w-0 flex-grow p-2'>
				<p className='text-sm text-secondary-extraLight'>
					<span className='text-base font-medium text-primary-main'>
						${rentPrice.toFixed(3)}
					</span>{' '}
					/ month
				</p>
				<p className='mt-1 text-sm font-medium'>{title}</p>
				<p className='mt-1 text-xs text-secondary-extraLight'>{location}</p>
				<div className='mt-3 flex flex-wrap gap-2'>
					<Label>
						<HomeIcon className='mb-[2px] h-3 w-3' />
						{rooms} rooms
					</Label>
					<Label>
						<p>
							{squareMeters}
							<span className='text-[10px]'>
								m<sup>2</sup>
							</span>
						</p>
					</Label>
				</div>
			</div>
		</div>
	)
}

export default PropertyCard
