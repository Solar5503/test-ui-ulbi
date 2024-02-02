import { describe, it } from 'mocha'
import usersPage from '../pages/users.page.js'

describe('Users page', () => {
  it('load data', async () => {
    await usersPage.loadData()
  })

  it('delete user', async () => {
    await usersPage.deleteUser()
  })
})
