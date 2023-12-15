import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Test App', () => {
  test('render header', () => {
    render(<App />)
    const header = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(header).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    // screen.debug()
    expect(input).toMatchSnapshot()
  })
  test('not element', () => {
    render(<App />)
    const header = screen.queryByText(/hello2/i)
    expect(header).toBeNull()
  })
  test('async element', async () => {
    render(<App />)
    screen.debug()
    const header = await screen.findByText(/data/i)
    expect(header).toBeInTheDocument()
    expect(header).toHaveStyle({ color: 'red' })
    screen.debug()
  })
  test('click event', () => {
    render(<App />)
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
  test('input event', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // fireEvent.input(input, { target: { value: '123123' } })
    await user.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  })
})
