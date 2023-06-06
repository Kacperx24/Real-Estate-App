import useFilters from '@/hooks/useFilters'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SearchBar = () => {
	const {
		updateFilter,
		filters: { title },
	} = useFilters()

	return (
		<div className='flex items-center gap-5 px-6 md:order-3'>
			<MagnifyingGlassIcon className='h-6 w-6 text-secondary-light' />
			<input
				value={title}
				onChange={e => updateFilter('title', e.target.value)}
				className='w-[260px] flex-grow'
				placeholder='Search for houses, apartments...'
			/>
		</div>
	)
}

export default SearchBar
