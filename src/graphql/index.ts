import { gql } from '@apollo/client'

export const GET_PROPERTIES = gql`
	query RealEstates {
		realEstates {
			image {
				id
				url
			}
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
export const GET_PROPERTIES_FOR_LIST = gql`
	query RealEstates {
		realEstates {
			bathrooms
			id
			location
			purchasePrice
			rentPrice
			rooms
			squareMeters
			title
			type
			image {
				id
				url
			}
		}
	}
`

export const GET_PROPERTY_DATA = gql`
	query RealEstate($id: ID!) {
		realEstates(where: { id: $id }) {
			bathrooms
			id
			location
			purchasePrice
			rentPrice
			rooms
			squareMeters
			title
			type
			description
			image {
				id
				url
			}
		}
	}
`
