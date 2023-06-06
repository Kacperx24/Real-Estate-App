import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import FilterButtons from './FilterButtons'
import SearchBar from './SearchBar'

const Header = () => {
	return (
		<header className='flex flex-col items-center gap-7 border-b-2 border-border px-2 py-6 md:flex-row md:px-10'>
			<div className='md:w-[200px]'>
				<p className='flex text-[16px] font-medium'>
					<HomeIcon className='mr-3 h-6 w-6' /> Real.est
				</p>
			</div>
			<SearchBar />
			<FilterButtons />
		</header>
	)
}

export default Header
