import Header from '@/components/Header'
import Filters from '@/components/filters/Filters'
import List from '@/components/list/List'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Filters />
			<List />
		</>
	)
}
