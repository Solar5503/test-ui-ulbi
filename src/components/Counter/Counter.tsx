import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { decrement, increment } from '../../store/reducers/CounterReducer'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'

const Counter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(getCounterValue)

  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>
        +
      </button>
      <button data-testid="decrement-btn" onClick={onDecrement}>
        -
      </button>
    </div>
  )
}

export default Counter
