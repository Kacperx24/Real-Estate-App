import { useContext } from 'react'

import { FilterContext } from '../context/FilterContext'

const useFilters = () => useContext(FilterContext)

export default useFilters
