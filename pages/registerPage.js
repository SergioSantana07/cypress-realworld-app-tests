class RegisterPage{
    selectorsList() {
        const selectors = {
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            signupButton: "[data-test='signup-submit']",
            tostError: ".MuiFormHelperText-root",
            startBankButton: "[type='button']",
            bankNameField: "#bankaccount-bankName-input",
            bankRoutingField: '#bankaccount-routingNumber-input',
            accountNumberField: '#bankaccount-accountNumber-input',
            saveBankButton: '[data-test="bankaccount-submit"]',
            doneBankButton: "[data-test='user-onboarding-next']",


        }

        return selectors
        
    }

    FillRegister(FirstName, LastName, Username,Password) {
        cy.get(this.selectorsList().firstNameField).type(FirstName)
        cy.get(this.selectorsList().lastNameField).type(LastName)
        cy.get(this.selectorsList().usernameField).type(Username)
        cy.get(this.selectorsList().passwordField).type(Password)
        cy.get(this.selectorsList().confirmPasswordField).type(Password)
    }

    RegisterButton() {
        cy.get(this.selectorsList().signupButton).click()
    }

    ConferenceError() {
        cy.get(this.selectorsList().tostError)

    }

    StartsBank() {
        cy.get(this.selectorsList().startBankButton).eq(2).click()
        cy.get(this.selectorsList().bankNameField).type(`The Best Bank`)
        cy.get(this.selectorsList().bankRoutingField).type(`363625897`)
        cy.get(this.selectorsList().accountNumberField).type(`456897231`)
        cy.get(this.selectorsList().saveBankButton).click()
        cy.get(this.selectorsList().doneBankButton).click()
    }

}

export default RegisterPage