import { gql } from '@apollo/client'

export const GET_PROPERTIES = gql`
	query RealEstates {
		realEstates {
			bathrooms
			createdAt
			description
			id
			location
			publishedAt
			purchasePrice
			rentPrice
			rooms
			squareMeters
			title
			type
			updatedAt
		}
	}
`
