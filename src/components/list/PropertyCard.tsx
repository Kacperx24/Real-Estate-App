import { PropertyDataForList } from '@/types'
import Image from 'next/image'
import React, { FC } from 'react'
import PriceLabel from './PriceLabel'
import Labels from './Labels'
import Link from 'next/link'

const PropertyCard: FC<{ data: PropertyDataForList }> = ({ data }) => {
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
		<Link
			href={`/${id}`}
			className='flex h-36 w-11/12 min-w-[320px] max-w-[400px] gap-2 rounded-xl bg-white p-2 pr-6 md:w-96'
		>
			<div className=' relative h-full w-2/5 overflow-hidden rounded-lg'>
				<Image
					src={url}
					fill
					sizes='(max-width: 200px)'
					alt={location}
					style={{ objectFit: 'cover' }}
					priority
				/>
			</div>
			<div className='w-0 flex-grow p-2 pt-1'>
				<PriceLabel price={rentPrice} />
				<p className='mt-1 text-sm font-medium'>{title}</p>
				<p className='mt-1 text-xs text-secondary-extralight'>{location}</p>
				<Labels squareMeters={squareMeters} rooms={rooms} />
			</div>
		</Link>
	)
}

export default PropertyCard
