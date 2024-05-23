import LoginPage from '../../../pages/loginPage.js'
import userDate from  '../../fixtures/userDate.json'

const loginPage = new LoginPage()

describe('Login Tests - RWA', () => {
  it('login test with correct data', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
  })

  it('login test with incorrect data', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userFail.username, userDate.userFail.password)
    loginPage.ConferenceError()
  })

})