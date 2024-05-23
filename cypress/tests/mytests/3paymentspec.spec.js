import LoginPage from '../../../pages/loginPage.js'
import MenuPage from '../../../pages/menuPage.js'
import userDate from  '../../fixtures/userDate.json'
import TransactionPage from '../../../pages/transactionPage.js'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()
const menuPage = new MenuPage()


describe( 'Payment Tests', () => {
  it("payment test with sufficient balance", () =>{
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    menuPage.ConferenceMenu()
    menuPage.TransactionButton()
    transactionPage.ConferenceTransactionPage()
    transactionPage.Transaction()

  })

  //it("Insufficient balance payment test", () =>{
    //loginPage.accessLoginPage()
    //loginPage.loginWithUser(userDate.userSuccess.username, userDate.userSuccess.password)
    //menuPage.ConferenceMenu()
    //menuPage.TransactionButton()
    //transactionPage.ConferenceTransactionPage()
    //transactionPage.TransactionFail()

  //})

})
