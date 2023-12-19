import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
import renderWithRouter from '../test/helpers/renderWithRouter'
import Users from './Users'

jest.mock('axios')
describe('Test Users', () => {
  let response: {
    data: {
      id: number
      name: string
    }[]
  }

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    }
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('render users', async () => {
    (axios.get as jest.Mock).mockReturnValue(response)
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toHaveBeenCalledTimes(1)
    screen.debug()
  })
  test('test redirect to details page', async () => {
    const user = userEvent.setup();
    (axios.get as jest.Mock).mockReturnValue(response)
    renderWithRouter(<Users />)
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    await user.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
})
