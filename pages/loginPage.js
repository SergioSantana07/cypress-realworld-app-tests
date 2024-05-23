class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: '.MuiButton-label',
            wrongCredentialAlert: "[data-test='signin-error']",
            registerButton: '[data-test="signup"]',

        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    ConferenceError() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    RegisterButton() {
        cy.get(this.selectorsList().registerButton).click()
    }
}

export default LoginPage