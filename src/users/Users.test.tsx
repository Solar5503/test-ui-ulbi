import { render, screen } from '@testing-library/react'
import axios from 'axios'
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
  test('render users', async () => {
    (axios.get as jest.Mock).mockReturnValue(response)
    render(<Users />)
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toHaveBeenCalledTimes(1)
    screen.debug()
  })
})
