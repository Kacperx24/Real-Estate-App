export interface PropertyDataForList {
	location: string
	title: string
	squareMeters: number
	rooms: number
	bathrooms: number
	purchasePrice: number
	rentPrice: number
	id: string
	type: string
	image: { id: string; url: string }
}

export interface Filters {
	title: string
	transactionType: 'rent' | 'buy'
	propertyType: 'house' | 'apartment' | ''
	minPrice: number | null
	maxPrice: number | null
	rooms: number[]
	minArea: number | null
	maxArea: number | null
}
