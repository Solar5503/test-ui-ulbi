import { expect } from '@wdio/globals'
import { describe, it } from 'mocha'
import helloPage from '../pages/hello.page.js'

describe('Hello page', () => {
  it('should Hello World', async () => {
    await helloPage.open()
    await helloPage.toggleTitleWithInput('hello')
    await expect(helloPage.helloTitle).toBeExisting()
    await helloPage.toggleBtn.click()
    await expect(helloPage.helloTitle).not.toBeExisting()
  })
  it('should not toggle', async () => {
    await helloPage.open()
    await helloPage.toggleTitleWithInput('asdffa')
    await expect(helloPage.helloTitle).not.toBeExisting()
  })
})
