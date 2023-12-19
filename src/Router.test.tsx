import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('Test app', () => {
  test('Router test', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    await user.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    await user.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/some-random-path']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
