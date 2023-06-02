'use client'

import Header from '@/components/Header'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Providers from '@/components/Providers'
import useMediaQuery from '@/hooks/useMediaQuery'
import Filters from '@/components/filters/Filters'
import List from '@/components/list/List'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
})

export const metadata = {
	title: 'Real.est',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isMobile = useMediaQuery()

	return (
		<html lang='en'>
			<body className={`${poppins.className} md:max-h-screen`}>
				<Providers>
					<div className='mb-12 bg-background text-secondary-main md:mb-0 md:h-screen'>
						<div className='mx-auto flex h-full max-w-[1536px] flex-col'>
							<Header />
							<div className='flex min-h-0 flex-grow flex-col md:flex-row'>
								{!isMobile ? (
									<>
										<Filters />
										<List />
										{children}
									</>
								) : (
									children
								)}
							</div>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
