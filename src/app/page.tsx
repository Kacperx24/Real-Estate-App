'use client'

import Filters from '@/components/filters/Filters'
import List from '@/components/list/List'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Home() {
	const isMobile = useMediaQuery()
	return isMobile ? (
		<>
			<Filters />
			<List />
		</>
	) : null
}
