import { createContext, Dispatch, SetStateAction } from 'react'

export type FilterContextType = {
  filter: string,
  setFilter: Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextType>({
  filter: 'all',
  setFilter: () => {}
})