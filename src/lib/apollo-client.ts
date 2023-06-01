import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli1ewhvu43z901upavxk0ff1/master',
	cache: new InMemoryCache(),
})
