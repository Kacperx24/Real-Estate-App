'use client'

import { usePathname } from 'next/navigation'
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

	const pathname = usePathname()

	const isActive = pathname.substring(1) === id

	return (
		<Link
			href={`/${id}`}
			className={`flex h-36 w-11/12 min-w-[320px] max-w-[360px] gap-2 rounded-xl border-[1px] bg-white p-2 pr-6 md:w-96 lg:h-40 lg:max-w-[400px] lg:rounded-2xl ${
				isActive ? 'border-primary-main' : 'border-white'
			}`}
		>
			<div className=' relative h-full w-2/5 overflow-hidden rounded-lg lg:rounded-xl'>
				<Image
					src={url}
					fill
					sizes='(max-width: 200px)'
					alt={location}
					style={{ objectFit: 'cover' }}
					priority
				/>
			</div>
			<div className='w-0 flex-grow p-2 pt-1 lg:p-[10px]'>
				<PriceLabel price={rentPrice} />
				<p className='mt-1 text-sm font-medium lg:mt-2 lg:text-[15px]'>
					{title}
				</p>
				<p className='mt-1 text-xs text-secondary-extralight '>{location}</p>
				<Labels squareMeters={squareMeters} rooms={rooms} />
			</div>
		</Link>
	)
}

export default PropertyCard
