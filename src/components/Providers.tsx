'use client'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo-client'
import React, { FC, ReactNode } from 'react'
import { FilterProvider } from '@/context/FilterContext'

interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<FilterProvider>{children}</FilterProvider>
		</ApolloProvider>
	)
}

export default Providers
