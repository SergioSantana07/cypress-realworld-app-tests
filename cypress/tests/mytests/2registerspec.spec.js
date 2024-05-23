import LoginPage from '../../../pages/loginPage.js'
import RegisterPage from '../../../pages/registerPage.js'


const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe( 'Register Tests', () => {


  it('registration test with correct data', () => {
    loginPage.accessLoginPage()
    loginPage.RegisterButton()
    cy.location('pathname').should('equal', '/signup')
    registerPage.FillRegister('alberto','nobrega',"albnob","test")
    registerPage.RegisterButton()

  })

  it('registration test with incorrect data', () => {
    loginPage.accessLoginPage()
    loginPage.RegisterButton()
    cy.location('pathname').should('equal', '/signup')
    registerPage.FillRegister('alberto','nobrega',"albnob","tes")
    registerPage.ConferenceError()

  })


  
})
