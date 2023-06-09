'use client'

import Filters from '@/components/filters/Filters'
import List from '@/components/list/List'
import Spinner from '@/components/ui/Spinner'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Home() {
	const isMobile = useMediaQuery()

	return isMobile ? (
		<>
			<Filters />
			<List />
		</>
	) : (
		<div className='w-full bg-white'>
			<Spinner />
		</div>
	)
}
