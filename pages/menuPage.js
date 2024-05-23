class MenuPage{
    selectorsList() {
        const selectors = {
            ConferenceMenu: '.MuiTabs-flexContainer',
            TransactionButton: '[data-test="nav-top-new-transaction"]',
            TransactionHistoryButton: "[data-test='transaction-item-BmeTXZFnk']",
        }

        return selectors
        
    }

    ConferenceMenu() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().ConferenceMenu)
            .should('be.visible')
    }

    TransactionButton() {
        cy.get(this.selectorsList().TransactionButton).click()
            .should('be.visible')
            .click()
    }

    TransactionHistoryButton() {
        cy.get(this.selectorsList().TransactionHistoryButton).click()
            .should('be.visible')
            .click()
    }


}

export default MenuPage