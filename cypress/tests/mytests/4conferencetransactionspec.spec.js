import LoginPage from '../../../pages/loginPage.js'
import MenuPage from '../../../pages/menuPage.js'
import userDate from  '../../fixtures/userDate.json'
import TransactionPage from '../../../pages/transactionPage.js'
import TransactionHistoricPage from '../../../pages/transactionHistoricPage.js'
import RegisterPage from '../../../pages/registerPage.js'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()
const menuPage = new MenuPage()
const transactionHistoricPage = new TransactionHistoricPage ()
const registerPage = new RegisterPage()

describe( 'Transaction history', () => {
  

  it("Successful transaction history", ()=> {
    const value = 150
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    menuPage.ConferenceMenu()
    menuPage.TransactionButton()
    transactionPage.ConferenceTransactionPage()
    transactionPage.Transaction()
    transactionHistoricPage.ConferenceTransactionHistoric()
  })

  it("No transaction history", ()=> {
    loginPage.accessLoginPage()
    loginPage.loginWithUser('albnob', 'test')
    //if (cy.get("[data-test='user-onboarding-dialog-content']") == true) {
      //registerPage.StartsBank()
    //}
    menuPage.ConferenceMenu()
    transactionHistoricPage.ConferenceNoTransactionHistoric()
  })

})
