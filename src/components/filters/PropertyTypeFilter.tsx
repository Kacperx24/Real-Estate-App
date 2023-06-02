import { BuildingOffice2Icon, HomeIcon } from '@heroicons/react/24/solid'

const PropertyTypeFilter = () => {
	return (
		<div>
			<h2 className='text-center'>Property type</h2>
			<div className='mt-6 flex w-[240px] gap-4'>
				<button className='property-type-btn'>
					<HomeIcon className='h-5 w-5' />
					House
				</button>
				<button className='property-type-btn'>
					<BuildingOffice2Icon className='h-5 w-5' />
					Apartment
				</button>
			</div>
		</div>
	)
}

export default PropertyTypeFilter
