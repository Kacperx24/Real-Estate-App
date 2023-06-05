'use client'
import DetailsLabels from '@/components/details/DetailsLabels'
import ImageCard from '@/components/details/ImageCard'
import PropertyDescription from '@/components/details/PropertyDescription'
import PropertyHeader from '@/components/details/PropertyHeader'
import PriceLabel from '@/components/list/PriceLabel'
import { GET_PROPERTY_DATA } from '@/graphql'
import { useQuery } from '@apollo/client'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { FC } from 'react'

const DetailsPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
	const { data, loading } = useQuery(GET_PROPERTY_DATA, { variables: { id } })

	if (loading) return <p>Loading...</p>

	const {
		image: { id: imageId, url },
		location,
		title,
		rentPrice,
		rooms,
		squareMeters,
		description,
	} = data?.realEstates[0] || {}

	console.log(data, url, location)

	return (
		<div className='flex flex-col items-center'>
			<ImageCard url={url} title={title} />
			<div className='flex flex-col items-center md:mx-5'>
				<PropertyHeader
					title={title}
					location={location}
					rentPrice={rentPrice}
				/>
				<DetailsLabels rooms={rooms} squareMeters={squareMeters} />
				<PropertyDescription description={description} />
			</div>
		</div>
	)
}

export default DetailsPage
