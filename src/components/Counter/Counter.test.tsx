import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTestApp } from '../../test/helpers/renderTestApp'
import { renderWithRedux } from '../../test/helpers/renderWithRedux'
import Counter from './Counter'
describe('Test Counter', () => {
  test('increment', async () => {
    const user = userEvent.setup()
    renderWithRedux(<Counter />, { counter: { value: 10 } })
    const incBtn = screen.getByTestId('increment-btn')
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    await user.click(incBtn)
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('decrement', async () => {
    const user = userEvent.setup()
    renderTestApp(null, { initialState: { counter: { value: 10 } } })
    const decBtn = screen.getByTestId('decrement-btn')
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    await user.click(decBtn)
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
