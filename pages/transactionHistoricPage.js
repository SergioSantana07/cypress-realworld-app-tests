class TransactionHistoricPage{
    selectorsList() {
        const selectors = {
            NameTransaction: '.MuiTypography-gutterBottom',
            HomeButton: '[data-test="sidenav-home"]',
            PersonalButton: '[data-test="nav-personal-tab"]',
            TransactionHistoricButton: '.MuiGrid-grid-sm-true',
            ConferenceTransactionValue: ".MuiTypography-displayInline",
            ConferenceTransactionName: '.MuiTypography-body1',
            ConferenceNoTransaction: "[data-test='empty-list-header']"
        }

        return selectors
        
    }

    ConferenceTransactionHistoric () {
        let NameTransference
        const value = 150
        cy.get(this.selectorsList().NameTransaction).eq(2)
        .invoke('text')
        .then ((text) => {
            NameTransference = text 
        })
        cy.get(this.selectorsList().HomeButton).click()
        cy.get(this.selectorsList().PersonalButton).click()
        cy.get(this.selectorsList().TransactionHistoricButton).eq(0).click()
        cy.get(this.selectorsList().ConferenceTransactionValue).eq(3)
        .invoke('text')
        .then((text) => {
            const valueEncontred = parseFloat(text.replace(/[^0-9.-]+/g, ""))
            expect(valueEncontred).equal(Math.round((value * -1)))
        })
        cy.get(this.selectorsList().ConferenceTransactionName).eq(8)
        .invoke('text')
        .then((text) => {
            const NameConference = text
            expect(NameTransference).equal((NameConference))
        })
    }
    
    ConferenceNoTransactionHistoric() {
        cy.get(this.selectorsList().HomeButton).click()
        cy.get(this.selectorsList().PersonalButton).click()
        cy.get(this.selectorsList().ConferenceNoTransaction).should('be.visible')
        .contains('No Transactions')
    }

}

export default TransactionHistoricPage