'use client'

import useFilters from '@/hooks/useFilters'
import { BuildingOffice2Icon, HomeIcon } from '@heroicons/react/24/solid'

const PropertyTypeFilter = () => {
	const {
		filters: { propertyType },
		updateFilter,
	} = useFilters()

	const updatePropertyType = (type: 'house' | 'apartment') => {
		if (propertyType === type) return updateFilter('propertyType', '')
		updateFilter('propertyType', type)
	}

	return (
		<div>
			<h2 className='text-center lg:ml-2 lg:text-left lg:text-[15px]'>
				Property type
			</h2>
			<div className='mt-6 flex w-[240px] gap-4 lg:mt-4'>
				<button
					onClick={() => updatePropertyType('house')}
					className={`property-type-btn ${
						propertyType === 'house' ? 'bg-primary-main text-white' : ''
					}`}
				>
					<HomeIcon className='h-5 w-5' />
					House
				</button>
				<button
					onClick={() => updatePropertyType('apartment')}
					className={`property-type-btn ${
						propertyType === 'apartment' ? 'bg-primary-main text-white' : ''
					}`}
				>
					<BuildingOffice2Icon className='h-5 w-5' />
					Apartment
				</button>
			</div>
		</div>
	)
}

export default PropertyTypeFilter
