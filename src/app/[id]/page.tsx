'use client'
import DetailsLabels from '@/components/details/DetailsLabels'
import ImageCard from '@/components/details/ImageCard'
import PropertyDescription from '@/components/details/PropertyDescription'
import PropertyHeader from '@/components/details/PropertyHeader'
import PriceLabel from '@/components/list/PriceLabel'
import Spinner from '@/components/ui/Spinner'
import { GET_PROPERTY_DATA } from '@/graphql'
import useFilters from '@/hooks/useFilters'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useQuery } from '@apollo/client'
import { ArrowLeftIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { FC } from 'react'

const DetailsPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
	const { data, loading } = useQuery(GET_PROPERTY_DATA, { variables: { id } })

	const isMobile = useMediaQuery()

	const {
		filters: { transactionType },
	} = useFilters()

	if (loading) return <Spinner />

	const {
		image: { id: imageId, url },
		location,
		title,
		rentPrice,
		purchasePrice,
		rooms,
		squareMeters,
		description,
	} = data?.realEstates[0] || {}

	return (
		<>
			<ImageCard url={url} title={title} />
			<div className='flex flex-col items-center md:mx-5'>
				<PropertyHeader
					title={title}
					location={location}
					price={transactionType === 'rent' ? rentPrice : purchasePrice}
				/>
				<DetailsLabels rooms={rooms} squareMeters={squareMeters} />
				<PropertyDescription description={description} />
			</div>
		</>
	)
}

export default DetailsPage
