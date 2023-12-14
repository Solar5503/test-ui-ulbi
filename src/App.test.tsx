import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('demo', () => {
  expect(true).toBe(true)
})

test('Render the main page', () => {
  render(<App />)
  const heading = screen.getByText('Vite + React')
  expect(heading).toBeInTheDocument()
})
