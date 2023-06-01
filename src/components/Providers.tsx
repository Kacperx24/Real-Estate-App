'use client'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo-client'
import React, { FC, ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Providers
