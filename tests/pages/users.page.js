import { $, $$ } from '@wdio/globals'
import Page from './page.js'
class UserPage extends Page {
  get loadingTitle() {
    return $('#users-loading')
  }
  get usersList() {
    return $('#users-list')
  }
  get usersItems() {
    return $$('#users-list')
  }
  async loadData() {
    try {
      await this.open()
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 })
      await this.usersList.waitForDisplayed({ timeout: 2000 })
    } catch (error) {
      throw new Error('Failed to load users ' + error.message)
    }
  }
  async deleteUser() {
    try {
      const usersCount = await this.usersItems[0].$$('div').length

      if (!usersCount) {
        throw new Error('No users found')
      }

      await this.usersItems[0].$$('div')[0].$('#user-delete').click()

      const usersCountAfterDelete = await this.usersItems[0].$$('div').length

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error(
          'User was not deleted or more than one user was deleted'
        )
      }
    } catch (e) {
      throw new Error('Failed to delete user ' + e.message)
    }
  }
  open() {
    return super.open('users-test')
  }
}

export default new UserPage()
