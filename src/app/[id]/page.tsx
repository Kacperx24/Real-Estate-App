'use client'

import DetailsLabels from '@/components/details/DetailsLabels'
import Footer from '@/components/details/Footer'
import ImageCard from '@/components/details/ImageCard'
import PropertyDescription from '@/components/details/PropertyDescription'
import PropertyHeader from '@/components/details/PropertyHeader'
import Spinner from '@/components/ui/Spinner'
import { GET_PROPERTY_DATA } from '@/graphql'
import useFilters from '@/hooks/useFilters'
import { useQuery } from '@apollo/client'
import React, { FC } from 'react'

const DetailsPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
	const { data, loading } = useQuery(GET_PROPERTY_DATA, { variables: { id } })

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
				<Footer />
			</div>
		</>
	)
}

export default DetailsPage
