'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import Filters from './filters/Filters'
import List from './list/List'

const Content = ({ children }: { children: React.ReactNode }) => {
	const isMobile = useMediaQuery()

	return (
		<>
			{!isMobile ? (
				<>
					<Filters />
					<List />
				</>
			) : null}
			{children}
		</>
	)
}

export default Content
