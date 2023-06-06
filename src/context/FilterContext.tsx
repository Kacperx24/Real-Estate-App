import { Filters, PropertyDataForList } from '@/types'
import React, { FC, ReactNode, createContext, useState } from 'react'

interface FilterContextType {
	updateFilter: UpdateFilter
	filterData: (data: PropertyDataForList[]) => PropertyDataForList[]
	filters: Filters
}

export type UpdateFilter = (
	filterName: keyof Filters,
	value: string | number | null | string[] | number[]
) => void

const initialState: Filters = {
	title: '',
	transactionType: 'rent',
	propertyType: '',
	minPrice: null,
	maxPrice: null,
	rooms: [],
	minArea: null,
	maxArea: null,
}

export const FilterContext = createContext<FilterContextType>({
	updateFilter: () => {},
	filterData: () => [],
	filters: initialState,
})

export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState(initialState)

	const updateFilter: UpdateFilter = (filterName, value) => {
		setFilters(prevState => ({
			...prevState,
			[filterName]: value,
		}))
	}

	const filterData = (data: PropertyDataForList[]) =>
		data?.filter(
			({
				title,
				location,
				type,
				rentPrice,
				purchasePrice,
				squareMeters,
				rooms,
			}) => {
				const matchesTitle =
					title.toLowerCase().includes(filters.title.toLowerCase()) ||
					location.toLowerCase().includes(filters.title.toLowerCase())
				const matchesPropertyType = () => {
					if (filters.propertyType === '') return true
					return filters.propertyType === type
				}
				const matchesPrice = () => {
					const { minPrice, maxPrice } = filters
					const price =
						filters.transactionType === 'rent'
							? rentPrice * 1000
							: purchasePrice

					if ((minPrice || maxPrice) === null) return true
					return (minPrice || 0) <= price && (maxPrice || 0) >= price
				}
				const matchesArea = () => {
					const { minArea, maxArea } = filters

					if ((minArea || maxArea) === null) return true
					return (
						(minArea || 0) <= squareMeters && (maxArea || 0) >= squareMeters
					)
				}

				const matchesRooms = () => {
					if (
						(rooms >= 4 && filters.rooms.includes(4)) ||
						!filters.rooms.length
					)
						return true

					return filters.rooms.includes(rooms)
				}

				return (
					matchesTitle &&
					matchesPropertyType() &&
					matchesPrice() &&
					matchesArea() &&
					matchesRooms()
				)
			}
		)

	const value = { updateFilter, filterData, filters }

	return (
		<FilterContext.Provider value={value}>{children}</FilterContext.Provider>
	)
}
