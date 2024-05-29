import LoginPage from '../../../pages/loginPage.js'
import MenuPage from '../../../pages/menuPage.js'
import userDate from  '../../fixtures/userDate.json'
import TransactionPage from '../../../pages/transactionPage.js'
import TransactionHistoricPage from '../../../pages/transactionHistoricPage.js'
import RegisterPage from '../../../pages/registerPage.js'
import { faker } from '@faker-js/faker'

const firstNameG = faker.person.firstName()
const lastNameG = faker.person.lastName()
const userNameG = faker.internet.userName({firstname: firstNameG, lastName: lastNameG })
const password = faker.internet.displayName({firstname: firstNameG, lastName: lastNameG })

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
    loginPage.RegisterButton()
    registerPage.FillRegister(firstNameG,lastNameG,userNameG,password,password)
    registerPage.RegisterButton()
    loginPage.loginWithUser(userNameG,password)
    registerPage.StartsBank()
    menuPage.ConferenceMenu()
    transactionHistoricPage.ConferenceNoTransactionHistoric()
  })

})
