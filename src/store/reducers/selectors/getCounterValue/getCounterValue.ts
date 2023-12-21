import { RootState } from '../../../store'

export const getCounterValue = (state: RootState) => state.counter.value
